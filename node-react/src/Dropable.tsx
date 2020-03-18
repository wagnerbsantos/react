import React, { ReactElement, useState } from "react";
import { useDrop } from "react-dnd";
import { Draggable } from "./Draggable";
//import { Draggable } from "./Draggable";

interface DropableProps {
  id: number;
  types: string[];
  initialState?: string[];
}
export interface DragItem {
  type: string;
  id: string;
  origin: number;
}

export function Dropable(props: DropableProps) {
  const { initialState } = props;

  const [ids, setIds] = useState<string[]>(initialState || []);

  const [{ isOver }, drag] = useDrop({
    accept: props.types,
    drop(item: DragItem) {
      if (!ids.includes(item.id)) {
        setIds([...ids, item.id]);
        return { id: props.id };
      }
      return { id: -1 };
    },
    collect: monitor => ({
      canDrop: !!monitor.canDrop(),
      isOver: monitor.isOver()
        ? monitor.getItem().origin !== props.id
        : monitor.isOver()
    })
  });
  const c: ReactElement[] = [];
  ids.forEach(id => {
    c.push(
      <Draggable
        type={props.types[0]}
        id={id}
        origin={props.id}
        func={() => deleteById(id)}
      >
        <div id={props.id + "-" + id}>
          <input type="hidden" name={props.id + "[]"} value={id}></input>
          {id}
        </div>
      </Draggable>
    );
  });

  return (
    <div
      ref={drag}
      style={{ backgroundColor: isOver ? "#888888" : "#FFFFFF" }}
      className="dnd-container"
    >
      {c}
    </div>
  );
  function deleteById(id: string) {
    var temp = [...ids];
    var index = temp.indexOf(id);
    if (index > -1) {
      temp.splice(index, 1);
    }
    setIds(temp);
  }
}
