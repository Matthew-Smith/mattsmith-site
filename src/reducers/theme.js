import { Themes } from '../actions'

const themeReducer = (state = Themes.LIGHT, action) => {
    switch (action.type) {
        case 'SET_THEME':
            return {
                ...state,
                theme: action.theme
            };
        default:
            return state
    }
}
export default themeReducer