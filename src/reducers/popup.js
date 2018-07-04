const defaultState = {
  popupData: {
    URL: ""
  }
};

const popupData = (state = defaultState, action) => {
  switch (action.type) {
    case "SHOW_POPUP":
      return {
        popupData: action.popupData
      };
    case "HIDE_POPUP":
      return defaultState;
    default:
      return state;
  }
};

export default popupData;
