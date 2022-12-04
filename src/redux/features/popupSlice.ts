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
  },
});
export const popupsState = (state: { popup: any }) => state.popup;
export const { togglePopup: togglePopupActionCreator } = formSlice.actions;

export default formSlice.reducer;
