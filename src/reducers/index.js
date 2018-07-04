import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import popupData from "./popup";
import menuFixed from "./menu";
import mobile from "./mobile";
import sidebarOpen from "./sidebar";

export default combineReducers({
  popupData,
  menuFixed,
  mobile,
  sidebarOpen,
  routerReducer
});
