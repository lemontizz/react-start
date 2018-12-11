import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from './Prompt.css';
import * as promptActions from '../../store/actions/common/commonAction';

class Prompt extends Component {
	constructor() {
		super();
	}

	componentWillMount () {
		console.log('----tip componentWillMount ----');
	}

	cancel() {
		console.log('cancel');
		if(this.props.prompt.cancelCallback && typeof this.props.prompt.cancelCallback == 'function') {
			this.props.prompt.confirmCallback();
		}
		this.props.promptActions.hidePrompt();
	}

	confirm() {
		console.log('confirm');
		if(this.props.prompt.confirmCallback && typeof this.props.prompt.confirmCallback == 'function') {
			this.props.prompt.confirmCallback();
		}
		this.props.promptActions.hidePrompt();
	}

	render() {
		let self = this;

		return (
			<div className={this.props.prompt.show ? 'page-prompt-wrap' : 'page-prompt-wrap hide'}>
				<div className="page-prompt">
					<div className="header clearfix">
						<span data-field="title" className="title">{this.props.prompt.title}</span>
						<a href="javascript:;" className="close" onClick={() => this.cancel.call(self)}>
							<span className="close-1"></span>
							<span className="close-2"></span>
						</a>
					</div>
					<div className="body">
						<div data-field="content">{this.props.prompt.text}</div>
					</div>
					<div className="footer">
						<button onClick={() => this.cancel.call(self)} className="btn btn-default">取消</button>
						<button onClick={() => this.confirm.call(self)} className="btn btn-primary">确认</button>
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
)(Prompt);