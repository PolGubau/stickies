import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  opened: true,
};

// create a slice for terminals
export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    toggleForm: (state) => {
      state.opened = !state.opened;
    },
  },
});
export const formOptions = (state: { form: any }) => state.form;
export const { toggleForm: toggleFormActionCreator } = formSlice.actions;

export default formSlice.reducer;
