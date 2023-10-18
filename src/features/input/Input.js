import React from "react";
import { useDispatch } from "react-redux";
import { inputText } from "../previewer/previewerSlice";

export function Input() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(inputText(e.target.value));
  };

  return (
    <div>
      <div>
        <textarea onChange={handleChange}></textarea>
      </div>
    </div>
  );
}
