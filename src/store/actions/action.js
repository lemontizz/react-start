import * from './actionTypes';

export function receiveStuff(json) {
	return {
		type: types.RECEIVE_STUFF,
		stuff: json.stuff
	}
}

export function fetchStuff() {
	dispatch(receiveStuff({aaa: '111'}));
}