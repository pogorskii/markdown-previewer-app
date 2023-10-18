import React from "react";
import { useDispatch } from "react-redux";
import { inputText } from "../previewer/previewerSlice";
import { initialState } from "../previewer/previewerSlice";

export function Input() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(inputText(e.target.value));
  };

  return (
    <textarea
      className="form-control"
      rows={Math.floor(visualViewport.height / 23)}
      defaultValue={initialState.input}
      onChange={handleChange}
      id="editor"
    />
  );
}
