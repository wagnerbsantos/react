import React from "react";
import ItemTypes from "./ItemTypes";
import { useDrop } from "react-dnd";
//import { Draggable } from "./Draggable";

export const Dropable = props => {
  const [{ isDragging }, drag] = useDrop({
    accept: ItemTypes.FILTER,
    drop: item => alert(item.id)
  });

  return (
    <>
      <div ref={drag} className="dnd-container">
        {props.children}
      </div>
    </>
  );
};
