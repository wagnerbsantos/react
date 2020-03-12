import React from "react";
import { Draggable } from "./Draggable";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import { Dropable } from "./Dropable";

function renderSquare(i: number, knightPosition: number) {
  const x = i;
  return <Dropable>{renderPiece(x, knightPosition)}</Dropable>;
}

function renderPiece(x: number, knightPosition: number) {
  return <Draggable id={x} text={"filtro" + x} />;
}

export default function Board(knightPosition: number) {
  const squares = [];
  for (let i = 0; i < 2; i++) {
    squares.push(renderSquare(i, knightPosition));
  }

  return (
    <DndProvider backend={Backend}>
      <div
        style={{
          width: "500px",
          height: "500px",
          flexWrap: "wrap",
          display: "flex"
        }}
      >
        {squares}
      </div>
    </DndProvider>
  );
}
