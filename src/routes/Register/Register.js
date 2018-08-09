import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import style from './Register.css';

class Register extends Component {
	render() {
		return (
			<div>
				<div className="register-head">
			        <div className="text">Thank you for registering FED</div>
			    </div>

			    <div className="register-body" id="register-body">
			        <h2>Account Profile</h2>
			        <div className="form-item">
			            <div className="textbox">
			                <input type="email" autocomplete="off" id="email" />
			            </div>
			            <label className="label">Email</label>
			        </div>
			        <div className="form-item">
			            <div className="textbox">
			                <input type="text" autocomplete="off" id="username" max="18" />
			            </div>
			            <label className="label">Username</label>
			        </div>
			        <div className="form-item">
			            <div className="textbox">
			                <input type="password" autocomplete="off" id="password" max="18" />
			            </div>
			            <label className="label">Password</label>
			            <div className="password-vali">
			                <ul className="clearfix">
			                    <li id="character"><span className="fa fa-check icon"></span><span className="text">最少6个字符</span></li>
			                    <li id="number"><span className="fa fa-check icon"></span><span className="text">1个数字</span></li>
			                    <li id="letter"><span className="fa fa-check icon"></span><span className="text">1个字母</span></li>
			                    <li id="special-character"><span className="fa fa-check icon"></span><span className="text">1个特殊字符</span></li>
			                </ul>
			            </div>
			        </div>
			        <div className="form-item confirm-password">
			            <div className="textbox">
			                <input type="password" autocomplete="off" id="confirm-password" />
			            </div>
			            <label className="label">Confirm Password</label>
			            <div className="password-vali">
			                <ul className="clearfix">
			                    <li id="password-equal"><span className="fa fa-check icon"></span><span className="text">确认密码与密码一致</span></li>    
			                </ul>
			            </div>
			        </div>
			        <div className="form-btn">
			            <button id="submit"><i className="fa fa-spinner fa-pulse fa-fw icon"></i>Submit</button>
			        </div>
			        <div className="info">
			            Existing account, <Link to="/login" className="text-link">login</Link>
			        </div>
			    </div>
			</div>
		);
	}
}

export default Register;