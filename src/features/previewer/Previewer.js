import React from "react";
import { useSelector } from "react-redux";

export function Previewer() {
  const input = useSelector((state) => state.counter.input);

  return <p>{input}</p>;
}
