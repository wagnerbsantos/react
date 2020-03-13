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
          initialState={["sexo"]}
          id={1}
        ></Dropable>
        <Dropable
          types={[ItemTypes.FILTER]}
          initialState={[]}
          id={3}
        ></Dropable>
        <Dropable
          types={[ItemTypes.FILTER]}
          initialState={[
            "tipo atendimento",
            "nome profissional",
            "Unidade de saude"
          ]}
          id={2}
        ></Dropable>
      </div>
    </DndProvider>
  );
}
