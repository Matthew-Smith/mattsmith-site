
const popupURL = (state = '', action) => {
    switch (action.type) {
        case 'SHOW_POPUP':
            return action.popupURL;
        case 'HIDE_POPUP':
            return {
                ...state,
                popupURL: ''
            };
        default:
            return state;
    }
};

export default popupURL;
