import React, { ReactElement } from "react";
import { DragPreviewImage, useDrag } from "react-dnd";
import ItemTypes from "./ItemTypes";
import { DragItem } from "./Dropable";
import "./Dnd.css";

interface DraggableProps {
  type: string;
  id: string;
  func: () => void;
  children?: ReactElement;
}

export function Draggable(props: DraggableProps) {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: props.type, id: props.id },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult.id != -1) {
        props.func();
      }
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1
      }}
      className="dnd-box"
    >
      {props.children}
    </div>
  );
}
