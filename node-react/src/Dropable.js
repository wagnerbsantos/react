import React from "react";
import { ItemTypes } from "./ItemTypes";
import { useDrop } from "react-dnd";
import Draggable from "./Draggable";

class Dropable extends React.Component {
  constructor(props) {
    super(props);
    alert(props);
    this.state = { list: [] };
  }

  render() {
    /*const [{ isOver }, drop] = useDrop({
      accept: ItemTypes.FILTER,
      drop(item) {
        //addBox(item.id);
        console.log(item.id);
      }
    });*/
    alert(this.props.children);
    return <div className="dnd-container">{this.props.children}</div>;
  }
}

export default Dropable;
