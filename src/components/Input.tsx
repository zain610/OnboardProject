import React from "react";
import { TextField } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import "./input.css";

type InputProps = {
  label: string;
  helper: string;
  type?: string;
  labelProps?: object;
};
export default ({ label, helper, type = "", labelProps = {} }: InputProps) => {
  return (
    <Grid item xs>
      <TextField
        id="outlined-search"
        label={label}
        variant="outlined"
        helperText={helper}
        type={type}
        InputLabelProps={labelProps}
        fullWidth
      />
    </Grid>
  );
};
