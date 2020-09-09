import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Grid,
} from "@material-ui/core";

type DropDownProps = {
  label: string;
  options: Array<string>;
  helperText?: string;
  variant?: "standard" | "outlined" | "filled" | undefined;
  name: string;
  value?: string;
  handleChanges: (
    event: React.ChangeEvent<{ name?: unknown; value: unknown }>
  ) => void;
};
export default ({
  label,
  options,
  helperText = "",
  variant = "standard",
  name,
  value,
  handleChanges,
}: DropDownProps) => {
  return (
    <Grid item xs>
      <FormControl variant={variant} fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} name={name} onChange={(e) => handleChanges(e)}>
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </Grid>
  );
};
