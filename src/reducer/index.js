import { combineReducers } from 'redux';
import todoReducer from './todos';
import homeReducer from './home';

const createReducer = combineReducers({
    todos: todoReducer,
    manage: homeReducer
});
export default createReducer;
