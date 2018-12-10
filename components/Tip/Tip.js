import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from './Tip.css';
import * as promptActions from '../../store/actions/common/commonAction';

class Tip extends Component {
	constructor() {
		super();
	}

	componentWillMount () {
		console.log('----tip componentWillMount ----');
	}

	render() {
		let self = this;

		return (
			<div class="page-prompt-wrap">
				<div id="page-prompt">
					<div class="header clearfix">
						<span data-field="title" class="title">提示 - {this.props.prompt.title}</span>
						<a href="javascript:;" class="close" data-action="close">
							<span class="close-1"></span>
							<span class="close-2"></span>
						</a>
					</div>
					<div class="body">
						<div data-field="content">提示内容</div>
					</div>
					<div class="footer">
						<button data-action="close" class="btn btn-default">取消</button>
						<button data-action="confirm" class="btn btn-primary">确认</button>
					</div>
				</div>	
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		prompt: state.prompt
	}
}

function mapDispatchProps(dispatch) {
	return {
		promptActions: bindActionCreators(promptActions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchProps
)(Tip);