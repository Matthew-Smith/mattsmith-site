export const showPopup = popupData => ({
  type: "SHOW_POPUP",
  popupData
});

export const hidePopup = () => ({
  type: "HIDE_POPUP"
});

export const setSidebarOpen = sidebarOpen => ({
  type: "SET_SIDEBAR_OPEN",
  sidebarOpen
});

export const setMenuFixed = fixed => ({
  type: "SET_MENU_FIXED",
  fixed
});

export const setMobile = mobile => ({
  type: "SET_MOBILE",
  mobile
});
