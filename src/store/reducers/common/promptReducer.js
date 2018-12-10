import initialState from '../initialState';
import { SHOW_PROMPT, HIDE_PROMPT } from '../../actions/actionType';

export default function prompt(state = initialState.prompt, action) {
	let newState;
	switch (action.type) {
		case SHOW_PROMPT:
			return action.prompt;
		case HIDE_PROMPT:
			console.log('HIDE_PROMPT Action');
			return action.prompt;
		default:
			return state;
	}
}