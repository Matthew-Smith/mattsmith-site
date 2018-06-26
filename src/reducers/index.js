import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import popupURL from './popup';
import theme from './theme';

export default combineReducers({
    popupURL,
    theme,
    routerReducer
});