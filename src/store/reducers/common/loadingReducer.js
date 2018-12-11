import initialState from '../../store/initialState';

export default function loading(state = initialState.loading, action) {
	let newState;
	switch (action.type) {
		case 'SHOW_LOADING':
			return action.loading;
		case 'HIDE_LOADING':
			console.log('HIDE_LOADING Action');
			return action.loading;
		default:
			return state;
	}
}