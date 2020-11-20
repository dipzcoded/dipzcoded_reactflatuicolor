import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";

const DraggableColorList = SortableContainer(({ colors, onDeleteColor }) => {
  return (
    <div
      style={{
        height: "100%",
      }}
    >
      {colors.map((color, i) => (
        <DraggableColorBox
          index={i}
          color={color.color}
          name={color.name}
          key={color.name}
          onDeleteColor={onDeleteColor}
        />
      ))}
    </div>
  );
});

export default DraggableColorList;
