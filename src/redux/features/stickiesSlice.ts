import { createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_KEY } from "src/constants/storage";
import { IStickies } from "src/Interfaces";

const initialState: IStickies = {
  stickies: window
    ? JSON.parse(
        window.localStorage.getItem(LOCAL_STORAGE_KEY.stickies) || "[]"
      )
    : [],
};

// create a slice for terminals
export const stickiesSlice = createSlice({
  name: "stickies",
  initialState,
  reducers: {
    loadStickies: (state, action) => {
      state.stickies = action.payload;
    },

    addSticky: (state, action) => {
      const newSticky = {
        id: Math.floor(Math.random() * 1000000).toString(36),
        createdAt: new Date().toISOString(),
        ...action.payload,
        archived: false,
        completed: false,
      };
      if (newSticky.category.length === 0) {
        delete newSticky.category;
      }
      if (newSticky.description.length === 0) {
        delete newSticky.description;
      }

      state.stickies.push(newSticky);
      localStorage.setItem(
        LOCAL_STORAGE_KEY.stickies,
        JSON.stringify(state.stickies)
      );
    },
    removeSticky: (state, action) => {
      state.stickies = state.stickies.filter(
        (sticky) => sticky.id !== action.payload
      );
      localStorage.setItem(
        LOCAL_STORAGE_KEY.stickies,
        JSON.stringify(state.stickies)
      );
    },
    updateSticky: (state, action) => {
      const updatedSticky = action.payload;
      if (updatedSticky.category.length === 0) {
        delete updatedSticky.category;
      }
      if (updatedSticky.description.length === 0) {
        delete updatedSticky.description;
      }
      state.stickies = state.stickies.map((sticky) => {
        if (sticky.id === updatedSticky.id) {
          return updatedSticky;
        }
        return sticky;
      });
      localStorage.setItem(
        LOCAL_STORAGE_KEY.stickies,
        JSON.stringify(state.stickies)
      );
    },
    toggleCompleted: (state, action) => {
      state.stickies = state.stickies.map((sticky) => {
        if (sticky.id === action.payload) {
          return {
            ...sticky,
            completed: !sticky.completed,
          };
        }
        return sticky;
      });
      localStorage.setItem(
        LOCAL_STORAGE_KEY.stickies,
        JSON.stringify(state.stickies)
      );
    },
    toggleArchived: (state, action) => {
      state.stickies = state.stickies.map((sticky) => {
        if (sticky.id === action.payload) {
          return {
            ...sticky,
            archived: !sticky.archived,
          };
        }
        return sticky;
      });
      localStorage.setItem(
        LOCAL_STORAGE_KEY.stickies,
        JSON.stringify(state.stickies)
      );
    },
    togglePrivate: (state, action) => {
      state.stickies = state.stickies.map((sticky) => {
        if (sticky.id === action.payload) {
          return {
            ...sticky,
            private: !sticky.private,
          };
        }
        return sticky;
      });
      localStorage.setItem(
        LOCAL_STORAGE_KEY.stickies,
        JSON.stringify(state.stickies)
      );
    },
  },
});
export const actualStickies = (state: any) => state.stickies;

export const {
  addSticky: addStickysActioncreator,
  loadStickies: loadStickysActioncreator,
  removeSticky: removeStickysActioncreator,
  updateSticky: updateStickiesActioncreator,
  toggleCompleted: toggleCompletedActioncreator,
  toggleArchived: toggleArchivedActioncreator,
  togglePrivate: togglePrivateActioncreator,
} = stickiesSlice.actions;

export default stickiesSlice.reducer;
