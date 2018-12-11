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