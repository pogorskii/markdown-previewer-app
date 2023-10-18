import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: "",
};

export const previewerSlice = createSlice({
  name: "textPreview",
  initialState,
  reducers: {
    inputText: (state, action) => {
      state.input = action.payload;
    },
  },
});

export const { inputText } = previewerSlice.actions;

export default previewerSlice.reducer;
