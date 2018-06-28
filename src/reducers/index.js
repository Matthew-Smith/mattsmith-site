import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import popupData from './popup';
import theme from './theme';

export default combineReducers({
    popupData,
    theme,
    routerReducer
});