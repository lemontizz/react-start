import * as types from '../actionType';

export function showPrompt(params) {
	return {
		type: 'SHOW_PROMPT',
		prompt: params
	}
}

export function hidePrompt() {
	return {
		type: 'HIDE_PROMPT',
		prompt: {
			show: false,
			title: '',
			text: ''
		}
	}
}

export function showLoading() {
	return {
		type: 'SHOW_LOADING',
		loading: {
			show: true
		}
	}
}

export function hideLoading() {
	return {
		type: 'HIDE_LOADING',
		loading: {
			show: false
		}
	}
}