import { combineReducers } from 'redux';
import prompt from './common/promptReducer';
import loading from './common/loadingReducer';

const rootReducer = combineReducers({
	prompt,
	loading
});

export default rootReducer;