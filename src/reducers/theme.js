import { Themes } from '../actions'

const themeReducer = (state = Themes.LIGHT, action) => {
    switch (action.type) {
        case 'SET_THEME':
            return action.theme
        default:
            return state
    }
}
export default themeReducer