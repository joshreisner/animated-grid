import { CSSProperties } from "react";

export const grid: CSSProperties = {
  alignContent: "start",
  backgroundColor: "palegoldenrod",
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  position: "relative",
  transitionProperty: "height",
  transitionTimingFunction: "ease",
};

export const shadowGrid: CSSProperties = {
  ...grid,
  opacity: 0.25,
  backgroundColor: "pink",
  position: "absolute",
  top: 0,
  width: "100%",
};
