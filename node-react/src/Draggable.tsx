import React from "react";
import { DragPreviewImage, useDrag } from "react-dnd";
import ItemTypes from "./ItemTypes";

const knightStyle: React.CSSProperties = {
  fontSize: 40,
  fontWeight: "bold",
  cursor: "move"
};

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
          ...knightStyle,
          opacity: isDragging ? 0.5 : 1
        }}
      >
        {props.text}
        {props.children}
      </div>
    </>
  );
};
