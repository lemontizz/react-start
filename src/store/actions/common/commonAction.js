import * as types from '../actionType';

export function showPrompt(params) {
	return {
		type: types.SHOW_PROMPT,
		prompt: params
	}
}

export function hidePrompt() {
	return {
		type: types.HIDE_PROMPT,
		prompt: {
			show: false,
			title: '',
			text: ''
		}
	}
}