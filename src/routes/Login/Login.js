import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from '../Register/Register.css';
import * as promptActions from '@/store/actions/common/promptAction';
import * as loadingActions from '@/store/actions/common/loadingAction';

class Login extends Component {
	constructor() {
		super();
	}		

	componentWillMount () {
		console.log(this);
	}

	submit() {
		console.log(this);
		console.log(this.store)
		console.log('xxxss');

		this.props.promptActions.showPrompt({
			show: true,
			text: 'xxx',
			title: 'mmm',
			confirmCallback() {
				alert('xxx')
			}
		});
		this.props.loadingActions.showLoading();
		console.log('xxx')
	}

	render() {
		let self = this;
		console.log(self, 'self');
		return (
			<div>
				<div className="register-head">
			        <div className="text">Thank you for logging in </div>
			    </div>
			    <div className="register-body">
			        <h2>Login FED {this.props.prompt.title}</h2>
			        <div className="form-item" id="username-item">
			            <div className="textbox">
			                <input  type="text" autoComplete="off" max="18" 
			                	id="username"
			                 />
			            </div>
			            <label>Username / Email</label>
			        </div>
			        <div className="form-item">
			            <div className="textbox">
			                <input refs="password" type="password" autoComplete="off" max="18" 
			                	id="password"
			                 />
			            </div>
			            <label>Password</label>
			        </div>
			        <div className="form-btn">
			            <button onClick={() => this.submit.call(self)}><i className="fa fa-spinner fa-pulse fa-fw icon"></i>Submit</button>
			        </div>
			        <div className="info">
			            No account, <Link to="/Register" className="text-link">register</Link> one
			        </div>
			    </div>
			</div>
		);
	}
}

// Login.propTypes = {
// 	promptActions: PropTypes.object,
// 	prompt: PropTypes.object
// };

function mapStateToProps(state) {
	return {
		prompt: state.prompt,
		loading: state.loading
	}
}

function mapDispatchProps(dispatch) {
	return {
		promptActions: bindActionCreators(promptActions, dispatch),
		loadingActions: bindActionCreators(loadingActions, dispatch),
	}
}

// export default Login;
export default connect(
	mapStateToProps,
	mapDispatchProps
)(Login);