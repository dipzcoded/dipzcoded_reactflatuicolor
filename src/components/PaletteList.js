import React, { useState, memo } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/core/styles";
import styles from "../jss/PaletteListStyle";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Avatar from "@material-ui/core/Avatar";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/CloseRounded";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { Dialog } from "@material-ui/core";

const PaletteList = memo(
  ({
    classes: { root, container, nav, paletteGrid, heading },
    palettes,
    deletePalette,
  }) => {
    const [open, setOpen] = useState(false);
    const [deletePaletteId, setDeletePaletteId] = useState("");
    const openDialog = (id) => {
      setOpen(true);
      setDeletePaletteId(id);
    };
    const closeDialog = () => {
      setOpen(false);
      setDeletePaletteId("");
    };

    const onDailogDelete = () => {
      deletePalette(deletePaletteId);
      closeDialog();
    };

    return (
      <div className={root}>
        <div className={container}>
          <nav className={nav}>
            <h1 className={heading}>React Colors</h1>
            <Link to="/palette/new">Create Palettes</Link>
          </nav>

          <TransitionGroup className={paletteGrid}>
            {palettes.map((palette) => (
              <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                <MiniPalette
                  palette={palette}
                  deletePalette={deletePalette}
                  openDialog={openDialog}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={open}
          aria-labelledby="delete-dialog-title"
          aria-describedby="deleting-palette-component"
          onClose={closeDialog}
        >
          <DialogTitle id="delete-dialog-title">
            Delete This Palette?
          </DialogTitle>
          <List>
            <ListItem button onClick={onDailogDelete}>
              <ListItemAvatar>
                <Avatar
                  style={{
                    backgroundColor: blue[100],
                    color: blue[600],
                  }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Delete</ListItemText>
            </ListItem>
            <ListItem button onClick={closeDialog}>
              <ListItemAvatar>
                <Avatar
                  style={{
                    backgroundColor: red[100],
                    color: red[600],
                  }}
                >
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Cancel</ListItemText>
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
);

export default withStyles(styles)(PaletteList);
