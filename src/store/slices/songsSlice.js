import { createSlice } from "@reduxjs/toolkit";
import { reset} from '../actions'

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      //* splice(indexToRemove, DeleteCount)
      state.splice(state.indexOf(action.payload), 1);
    },
  },
  // extraReducers: (builder) => {
  //   //* movieSlice.actions.<actionCreator> will return the type property of action object!!!
  //   //! Introduces a dependency; renaming slice or action will introduce breaking changes
  //   builder.addCase(movieSlice.actions.reset, () => {
  //     return [];
  //   });
  // }
  extraReducers: (builder) => {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addSong, removeSong } = songSlice.actions;
export const songsReducer = songSlice.reducer;

