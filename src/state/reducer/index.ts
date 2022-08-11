import { combineReducers } from 'redux';
import reducer from './reducer';

const reducers = combineReducers({
    repositories: reducer,
});

export default reducers;
