import store from '@/store';
import router from '@/router/index';
import storage from '@/scripts/storage';
import TRANS from '@/lang';

let request401 = function (data) {
    gotoLogin();
    store.dispatch('CLEAR_TIP');
    store.dispatch('SHOW_TIP', {
        type: 'danger',
        message: TRANS('会话已过期，请重新登录'),
    });
    router.push('login');
};

let gotoLogin = function() {
    store.dispatch('HIDE_ALERT');
    storage.clearToken();
    router.push('/login')
};

let showAlert = function(data, message, statusCode) {
    let params = {'message': message ? message : TRANS('服务器出错，请求失败')};

    store.dispatch('SHOW_ALERT', params)
};

let request400 = function(data) {
    let message = data && data.errors && data.errors.length ? '请求参数错误:' + data.errors.join(',') : '请求参数错误';

    showAlert(data, message, 400);
};

let request403 = function (data, opts) {
    let message = data && data.message ? `${TRANS('没有访问此数据的权限')}: ${opts.urlDesc}${data.message} ${TRANS('请联系管理员为你添加权限')}` : TRANS('没有访问此数据的权限') + (opts.urlDesc ? ':' + opts.urlDesc : '');

    showAlert(data, message, 403);
};
let request500 = function (data) {
    let message = data && data.message ?  `${TRANS('服务器出错，请求失败')}: ${data.message}` : TRANS('服务器出错，请求失败');

    showAlert(data, message, 500);
};

let defaultOpts = {
    method: 'GET',
    url: '',
    headers: {
    },
    token: true,
    expireStatus: true,
    timeout: 6000,
    blob: false,
    data: null,
    loading: true,
    alert: true,
    apiVersion: true,
    urlDesc: ''
};

let request = function (options) {
    let opts = Object.assign({}, defaultOpts, options),
        params,
        xhr,
        promise;
        
        if(opts.loading) store.dispatch('SHOW_LOADING');

        if(opts.method == 'get'.toUpperCase() && opts.data) {
            let query = opts.url.indexOf('?') > -1 ? '&' : '?';
            
            for(let key in opts.data) {
                query += key + '=' + opts.data[key] + '&'
            }

            opts.url = opts.url + query;
        }

        promise = new Promise(function(resolve, reject) {
            xhr = new XMLHttpRequest();
            xhr.open(opts.method, encodeURI(opts.url), true);

            xhr.onload = function(response) {
                
                if(opts.loading) store.dispatch('HIDE_LOADING');

                let data = xhr.response;
                let status = xhr.status;//xhr.status;
                    
                try {
                    data = JSON.parse(data);
                } catch(e) {
                    console.log('response信息无法被JSON.parse转义');
                }
                
                if(status >= 200 && status < 400) {
                    resolve({data, response, xhr});
                    return;
                } else {
                    console.error(status, opts.url, data, response)
                }

                switch(status) {
                    case 400: 
                        if(opts.alert && opts.expireStatus) {
                            request400(data);
                        }
                        reject({
                            status,
                            data, 
                            response,
                            defaultMsg: data.message || '填写的内容数据错误',
                        });
                        break;
                    case 401:
                        if(opts.alert && opts.expireStatus) {
                            request401(data);
                        }
                        reject({
                            status,
                            data, 
                            response,
                            defaultMsg: data.message || TRANS('会话已过期，请重新登录'),
                        });
                        break;
                    case 403:
                        if(opts.alert && opts.expireStatus) {
                            request403(data, opts);
                        } 
                        reject({
                            status,
                            data, 
                            response,
                            defaultMsg: data.message || TRANS('没有访问此数据的权限，请联系管理员为你添加权限'),
                        });
                        break;
                    case 500:
                        if(opts.alert && opts.expireStatus) {
                            request500(data);
                        }
                        reject({
                            status,
                            data, 
                            response,
                            defaultMsg: TRANS('服务器出错，请求失败'),
                        });
                        break;
                    default:
                        if(opts.alert) {
                            showAlert(data, data.message || '')
                        }
                        reject({
                            status,
                            data, 
                            response,
                        });
                        break;
                }
            };

            xhr.onerror = function(response) {
                if(opts.loading) store.dispatch('HIDE_LOADING');
                store.dispatch('SHOW_ALERT', {
                    message: (response && response) ? response.message : '服务器出错'
                });
                reject(response);
            };

            xhr.timeout = function() {
                if(opts.loading) store.dispatch('HIDE_LOADING');
                store.dispatch('SHOW_ALERT', {
                    message: TRANS('获取数据超时')
                });
            };

            if(opts.token === true) {
                if(storage.token()) {
                    opts.headers['Authorization'] = 'Bearer ' + storage.token();
                } else {
                    store.dispatch('CLEAR_TIP');
                    store.dispatch('SHOW_TIP', {
                        type: 'danger',
                        message: TRANS('身份认证已过期，请重新登录'),
                    });
                    gotoLogin();
                    resolve({});
                    return;
                }
            }

            if(!opts.headers['Content-Type']) {
                opts.headers['Content-Type'] = 'application/json';
            }

            for(let key in opts.headers) {
                xhr.setRequestHeader(key, opts.headers[key]);
            }

            try {
                params = JSON.stringify(opts.data);
            } catch(e) {
                params = opts.data;
            }

            if(options.data) {
                xhr.send(params)
            } else {
                xhr.send();
            }
        });

        promise.xhr = xhr;
        return promise;
};

export default request;