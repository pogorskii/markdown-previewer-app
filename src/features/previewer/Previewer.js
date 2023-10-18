import React from "react";
import { useSelector } from "react-redux";
import { marked } from "marked";

marked.use({
  breaks: true,
  gfm: true,
});

export function Previewer() {
  const input = useSelector((state) => state.previewer.input);
  const parsedInput = marked.parse(
    input.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, "")
  );

  return (
    <div
      id="preview"
      style={{ height: visualViewport.height - 50 }}
      className="text-start overflow-y-scroll"
      dangerouslySetInnerHTML={{ __html: parsedInput }}
    />
  );
}
