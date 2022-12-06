import { createSlice } from "@reduxjs/toolkit";
import { startingSettingsValues } from "src/constants/startingSettingsValues";
import { LOCAL_STORAGE_KEY } from "src/constants/storage";

const initialState = {
  settings: window
    ? JSON.parse(
        window.localStorage.getItem(LOCAL_STORAGE_KEY.settings) ||
          JSON.stringify(startingSettingsValues)
      )
    : startingSettingsValues,
};

// create a slice for terminals
export const categoriesSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changeStikiesLayout: (state, action) => {
      state.settings.stickiesLayout.settingValue = action.payload;
      window.localStorage.setItem(
        LOCAL_STORAGE_KEY.settings,
        JSON.stringify(state.settings)
      );
    },
  },
});
export const actualsettings = (state: any) => state.settings;
export const { changeStikiesLayout: changeStikiesLayoutActionCreator } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
