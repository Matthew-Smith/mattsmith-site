// By default menu is not fixed because we start at the top of the page
const defaultState = false;

const menuFixed = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_MENU_FIXED":
      return action.fixed;
    default:
      return state;
  }
};
export default menuFixed;
