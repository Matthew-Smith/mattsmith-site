// By default we assume we are not in mobile
const defaultState = false;

const mobile = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_MOBILE":
      return action.mobile;
    default:
      return state;
  }
};
export default mobile;
