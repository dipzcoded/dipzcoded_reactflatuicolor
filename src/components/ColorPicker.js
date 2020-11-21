import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const ColorPicker = ({
  paletteIsFull,
  currentColor,
  onChangeColor,
  addNewColor,
  colorName,
  onChange,
}) => {
  const onChangeVal = (e) => {
    onChange(e);
  };

  const onSubmit = (e) => {
    addNewColor();
  };

  return (
    <Fragment>
      <ChromePicker color={currentColor} onChangeComplete={onChangeColor} />
      <ValidatorForm onSubmit={onSubmit}>
        <TextValidator
          value={colorName}
          name="colorName"
          onChange={onChangeVal}
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
        >
          {paletteIsFull ? "Palette Full" : "Add Color"}
        </Button>
      </ValidatorForm>
    </Fragment>
  );
};

export default ColorPicker;
