export const showPopup = popupData => ({
    type: 'SHOW_POPUP',
    popupData
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
