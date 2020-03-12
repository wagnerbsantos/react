import React, { ReactElement, useState } from "react";
import ItemTypes from "./ItemTypes";
import { useDrop } from "react-dnd";
import { Draggable } from "./Draggable";
//import { Draggable } from "./Draggable";

interface DropableProps {
  id: number;
  types: string[];
  initialState?: number[];
}
export interface DragItem {
  type: string;
  id: number;
}

export function Dropable(props: DropableProps) {
  const { initialState } = props;

  const [ids, setIds] = useState<number[]>(initialState || []);

  const [{ isDragging }, drag] = useDrop({
    accept: props.types,
    drop(item: DragItem) {
      if (!ids.includes(item.id)) {
        setIds([...ids, item.id]);
        return { id: props.id };
      }
    }
  });

  const c = ids.map(id => (
    <Draggable type={props.types[0]} id={id} source={props.id}>
      <span>{id}</span>
    </Draggable>
  ));

  return (
    <div ref={drag} className="dnd-container">
      {c}
    </div>
  );
}
