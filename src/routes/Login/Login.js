import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import style from '../Register/Register.css';

class Login extends Component {
	render() {
		return (
			<div>
				<div className="register-head">
			        <div className="text">Thank you for logging in </div>
			    </div>
			    <div className="register-body">
			        <h2>Login FED</h2>
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
			            <button><i className="fa fa-spinner fa-pulse fa-fw icon"></i>Submit</button>
			        </div>
			        <div className="info">
			            No account, <Link to="/Register" className="text-link">register</Link> one
			        </div>
			    </div>
			</div>
		);
	}
}


export default Login;