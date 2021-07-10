import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import dataReducer from './dataReducer';

export default combineReducers({
    themeReducer, dataReducer
});