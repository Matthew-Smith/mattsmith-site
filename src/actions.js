export const showPopup = popupURL => ({
    type: 'SHOW_POPUP',
    popupURL
});

export const hidePopup = () => ({
    type: 'HIDE_POPUP'
});

export const setTheme = theme => ({
    type: 'SET_THEME',
    theme
});

export const Themes = {
    DARK: 'DARK',
    LIGHT: 'LIGHT'
};