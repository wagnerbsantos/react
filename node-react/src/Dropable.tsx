import React from "react";
import ItemTypes from "./ItemTypes";
import { useDrop } from "react-dnd";
//import { Draggable } from "./Draggable";

interface DropableProps {}
export interface DragItem {
  type: string;
  id: number;
}

export const Dropable: React.FC<DropableProps> = props => {
  const [{ isDragging }, drag] = useDrop({
    accept: ItemTypes.FILTER,
    drop(item: DragItem) {
      alert(item.id);
    }
  });

  return (
    <>
      <div ref={drag} className="dnd-container">
        {props.children}
      </div>
    </>
  );
};
