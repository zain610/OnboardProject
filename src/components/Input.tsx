import React from "react";
import { TextField } from "@material-ui/core";
import "./input.css";

type InputProps = {
  label: string;
  helper: string;
  overrideClass: string;
};
export default ({ label, helper, overrideClass }: InputProps) => {
  return (
    <TextField
      id="outlined-search"
      label={label}
      variant="outlined"
      helperText={helper}
      className={overrideClass}
    />
  );
};
