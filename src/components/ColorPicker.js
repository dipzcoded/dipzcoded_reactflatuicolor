import React from "react";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  picker: {
    width: "100% !important",
    marginTop: "2rem",
  },
  addColor: {
    width: "100%",
    padding: "1rem",
    fontSize: "2rem",
    marginTop: "1rem",
  },

  colorNameInput: {
    width: "100%",
    height: "70px",
  },
};

const ColorPicker = ({
  paletteIsFull,
  currentColor,
  onChangeColor,
  addNewColor,
  colorName,
  onChange,
  classes: { picker, addColor, colorNameInput },
}) => {
  const onChangeVal = (e) => {
    onChange(e);
  };

  const onSubmit = (e) => {
    addNewColor();
  };

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <ChromePicker
        color={currentColor}
        onChangeComplete={onChangeColor}
        className={picker}
      />
      <ValidatorForm onSubmit={onSubmit}>
        <TextValidator
          className={colorNameInput}
          variant="filled"
          value={colorName}
          name="colorName"
          onChange={onChangeVal}
          placeholder="Color Name"
          margin="normal"
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "this field is required",
            "Color name has to be unique",
            "Color already used!",
          ]}
        />
        <Button
          variant="contained"
          color="primary"
          style={{
            background: paletteIsFull ? "grey" : currentColor,
          }}
          type="submit"
          disabled={paletteIsFull}
          className={addColor}
        >
          {paletteIsFull ? "Palette Full" : "Add Color"}
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default withStyles(styles)(ColorPicker);
