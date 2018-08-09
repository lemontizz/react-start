import initialState from '../initialState';
import { SHOW_PROMPT, HIDE_PROMPT } from '../../actions/actionType';

export default function prompt(state = initialState.prompt, action) {
	let newState;
	switch (action.type) {
		case SHOW_PROMPT:
			console.log('SHOW_PROMPT Action');
			return action;
		case HIDE_PROMPT:
			console.log('HIDE_PROMPT Action');
			return action;
		default:
			return state;
	}
}