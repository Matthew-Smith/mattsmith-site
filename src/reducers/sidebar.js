// By default menu is not fixed because we start at the top of the page
const defaultState = false;

const sidebarOpen = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_SIDEBAR_OPEN":
      return action.sidebarOpen;
    default:
      return state;
  }
};
export default sidebarOpen;
