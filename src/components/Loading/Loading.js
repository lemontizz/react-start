import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from './Loading.css';
import * as loadingActions from '../../store/actions/common/commonAction';

class Loading extends Component {
	constructor() {
		super();
	}

	render() {
		let self = this;

		return (
			<div className={this.props.loading.show ? 'page-loading' : 'page-loading hide'}>
		        <span className="el-icon-loading">Loading...</span>
		    </div>
		);
	}
}

function mapStateToProps(state) {
	return {
		loading: state.loading
	}
}

function mapDispatchProps(dispatch) {
	return {
		loadingActions: bindActionCreators(loadingActions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchProps
)(Loading);