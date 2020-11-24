import React from "react";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";
import styles from "../jss/DraggableColorBoxStyles";

const DraggableColorBox = SortableElement(
  ({
    classes: { root, boxContent, deleteIcon },
    color,
    name,
    onDeleteColor,
  }) => {
    const onDelete = () => {
      onDeleteColor(name);
    };

    return (
      <div
        style={{
          backgroundColor: color,
        }}
        className={root}
      >
        <div className={boxContent}>
          <span>{name}</span>

          <DeleteIcon className={deleteIcon} onClick={onDelete} />
        </div>
      </div>
    );
  }
);

export default withStyles(styles)(DraggableColorBox);
