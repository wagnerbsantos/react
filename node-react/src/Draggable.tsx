import React from "react";
import { DragPreviewImage, useDrag } from "react-dnd";
import ItemTypes from "./ItemTypes";
import "./Dnd.css";

interface DraggableProps {
  id: number;
  text: string;
}

export const Draggable: React.FC<DraggableProps> = props => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.FILTER, id: props.id },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  return (
    <>
      <div
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1
        }}
        className="dnd-box"
      >
        {props.text}
        {props.children}
      </div>
    </>
  );
};
