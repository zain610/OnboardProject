import React from "react";
import { TextField } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import "./input.css";

type InputProps = {
  label: string;
  helper: string;
  type?: string;
  labelProps?: object;
  name: string;
  value?: string;
  error?: any;
  handleChanges: (
    event: React.ChangeEvent<{ name?: unknown; value: unknown }>
  ) => void;
};
export default ({
  label,
  helper,
  type = "",
  labelProps = {},
  name,
  value,
  error = null,
  handleChanges,
}: InputProps) => {
  return (
    <Grid item xs>
      <TextField
        name={name}
        value={value}
        id="outlined-search"
        label={label}
        variant="outlined"
        helperText={helper}
        type={type}
        InputLabelProps={labelProps}
        fullWidth
        onChange={(e) => handleChanges(e)}
        {...(error && { error: true })}
      />
    </Grid>
  );
};
