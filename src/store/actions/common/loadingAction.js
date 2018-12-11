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