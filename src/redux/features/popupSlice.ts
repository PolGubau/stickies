import { createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_KEY } from "src/constants/storage";

const initialState = {
  newSticky: {
    opened: true,
  },
  settings: {
    opened: false,
  },
  newCategory: {
    opened: false,
  },
  privateLogin: {
    opened: false,
    password: localStorage.getItem(LOCAL_STORAGE_KEY.password) ?? "",
    showingPrivate: false,
  },
};

// create a slice for terminals
export const formSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    togglePopup: (state, action) => {
      const popupName = action.payload;
      const popup = state[popupName as keyof typeof state];
      popup.opened = !popup.opened;
    },
    openPopup: (state, action) => {
      const popupName = action.payload;
      const popup = state[popupName as keyof typeof state];
      popup.opened = true;
    },
    closePopup: (state, action) => {
      const popupName = action.payload;
      const popup = state[popupName as keyof typeof state];
      popup.opened = false;
    },
    setPassword: (state, action) => {
      const newPassword = action.payload;
      state.privateLogin.password = newPassword;
      localStorage.setItem(LOCAL_STORAGE_KEY.password, newPassword);
    },
    hidePrivateStickies: (state) => {
      state.privateLogin.showingPrivate = false;
    },
    changeShowingPrivate: (state, action) => {
      state.privateLogin.showingPrivate = action.payload;
      localStorage.setItem(LOCAL_STORAGE_KEY.showingPrivate, action.payload);
    },
    closeAllPopups: (state) => {
      for (const popupName in state) {
        const popup = state[popupName as keyof typeof state];
        popup.opened = false;
      }
    },
    deletePassword: (state) => {
      state.privateLogin.password = "";
      localStorage.removeItem(LOCAL_STORAGE_KEY.password);
    },
  },
});

export const popupsState = (state: { popup: any }) => state.popup;
export const {
  togglePopup: togglePopupActionCreator,
  openPopup: openPopupActionCreator,
  closePopup: closePopupActionCreator,
  closeAllPopups: closeAllPopupsActionCreator,
  setPassword: setPasswordActionCreator,
  deletePassword: deletePasswordActionCreator,
  changeShowingPrivate: changeShowingPrivateActionCreator,
} = formSlice.actions;

export default formSlice.reducer;
