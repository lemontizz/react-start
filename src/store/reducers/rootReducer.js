import { combineReducers } from 'redux';
import stuff from './stuffReducer';
import prompt from './common/promptReducer';

const rootReducer = combineReducers({
	stuff: stuff,
	prompt: prompt
});

export default rootReducer;