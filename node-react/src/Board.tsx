import React from "react";
import { Draggable } from "./Draggable";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import { Dropable, DragItem } from "./Dropable";
import ItemTypes from "./ItemTypes";

export default function Board() {
  const drops = [];
  drops.push(
    <Dropable
      types={[ItemTypes.FILTER]}
      initialState={["sexo"]}
      id={0}
    ></Dropable>
  );
  drops.push(
    <Dropable types={[ItemTypes.FILTER]} initialState={[]} id={1}></Dropable>
  );
  drops.push(
    <Dropable types={[ItemTypes.FILTER]} initialState={[]} id={4}></Dropable>
  );
  drops.push(
    <Dropable
      types={[ItemTypes.FILTER]}
      initialState={["nome bem grande pacas pra crashar o bagui", "df", "Us"]}
      id={2}
    ></Dropable>
  );
  return (
    <DndProvider backend={Backend}>
      <form name="asdf" method="get" action="/">
        <div
          style={{
            width: "500px",
            height: "500px",
            flexWrap: "wrap",
            display: "flex"
          }}
        >
          {drops}
        </div>
        <button type="submit">aeho</button>
      </form>
    </DndProvider>
  );
}
