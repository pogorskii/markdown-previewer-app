import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  input: `
  # Welcome to my React Markdown Previewer!

## This is a sub-heading...

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

  `,
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
