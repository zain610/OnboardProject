import React from "react";
import { TextField } from "@material-ui/core";
import "./input.css";

type InputProps = {
  label: string;
  helper: string;
  overrideClass: string;
  type?: string;
  labelProps?: object;
};
export default ({
  label,
  helper,
  overrideClass,
  type = "",
  labelProps = {},
}: InputProps) => {
  return (
    <TextField
      id="outlined-search"
      label={label}
      variant="outlined"
      helperText={helper}
      className={overrideClass}
      type={type}
      InputLabelProps={labelProps}
    />
  );
};
