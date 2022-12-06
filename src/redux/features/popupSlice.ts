import { createSlice } from "@reduxjs/toolkit";

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
};

// create a slice for terminals
export const formSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    togglePopup: (state, action) => {
      const popupName = action.payload;
      //payload is which popup to toggle
      const popup = state[popupName as keyof typeof state];
      popup.opened = !popup.opened;
    },
    openPopup: (state, action) => {
      const popupName = action.payload;
      //payload is which popup to toggle
      const popup = state[popupName as keyof typeof state];
      popup.opened = true;
    },
    closePopup: (state, action) => {
      const popupName = action.payload;
      //payload is which popup to toggle
      const popup = state[popupName as keyof typeof state];
      popup.opened = false;
    },
    closeAllPopups: (state) => {
      for (const popupName in state) {
        const popup = state[popupName as keyof typeof state];
        popup.opened = false;
      }
    },
  },
});
export const popupsState = (state: { popup: any }) => state.popup;
export const {
  togglePopup: togglePopupActionCreator,
  openPopup: openPopupActionCreator,
  closePopup: closePopupActionCreator,
  closeAllPopups: closeAllPopupsActionCreator,
} = formSlice.actions;

export default formSlice.reducer;
