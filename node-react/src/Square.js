import React from "react";

export default function Square({ black, children }) {
  const fill = black ? "black" : "white";
  const stroke = black ? "white" : "black";

  return (
    <div
      style={{
        position: "absoulte",
        backgroundColor: fill,
        color: stroke,
        width: "100%",
        height: "100%"
      }}
    >
      {children}
    </div>
  );
}
