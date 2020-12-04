import React, { useState, Fragment } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

const PaletteMetalForm = ({
  onChangeVal,
  palettesName,
  hideFormDialog,
  onSavePalette,
}) => {
  const [open, setOpen] = useState(true);
  const [stage, setStage] = useState("form");

  const handleClose = () => {
    setOpen(false);
    hideFormDialog();
  };

  const showEmoji = (e) => {
    setStage("emoji");
  };

  const savePalette = (emoji) => {
    // console.log(emoji.native);
    onSavePalette(emoji.native);
    setStage("");
  };

  return (
    <Fragment>
      <Dialog open={stage === "emoji"} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>
        <Picker title="Pick a Palette Emoji" onSelect={savePalette} />
      </Dialog>
      <Dialog
        open={stage === "form"}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={showEmoji}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new beautiful palette. Make sure it's
              unique!
            </DialogContentText>

            <TextValidator
              label="Palette Name"
              value={palettesName}
              onChange={onChangeVal}
              name="palettesName"
              validators={["required", "isPaletteUnique"]}
              errorMessages={[
                "Enter Palette Name",
                "palette found with that name",
              ]}
              fullWidth
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </Fragment>
  );
};

export default PaletteMetalForm;
