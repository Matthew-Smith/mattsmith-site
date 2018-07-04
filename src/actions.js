export const showPopup = popupData => ({
  type: "SHOW_POPUP",
  popupData
});

export const hidePopup = () => ({
  type: "HIDE_POPUP"
});

export const setSidebarOpen = open => ({
  type: "SET_SIDEBAR_OPEN",
  open
});

export const setMenuFixed = fixed => ({
  type: "SET_MENU_FIXED",
  fixed
});

export const setMobile = mobile => ({
  type: "SET_MOBILE",
  mobile
});
