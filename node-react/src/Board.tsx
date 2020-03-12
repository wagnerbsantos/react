import React from "react";
import { Draggable } from "./Draggable";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import { Dropable, DragItem } from "./Dropable";
import ItemTypes from "./ItemTypes";

export default function Board() {
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
        <Dropable
          types={[ItemTypes.FILTER]}
          initialState={[1]}
          id={1}
        ></Dropable>
        <Dropable
          types={[ItemTypes.FILTER]}
          initialState={[2]}
          id={2}
        ></Dropable>
      </div>
    </DndProvider>
  );
}
