import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Grid,
  Checkbox,
  ListItemText,
} from "@material-ui/core";

type DropDownProps = {
  label: string;
  options: Array<string>;
  helperText?: string;
  variant?: "standard" | "outlined" | "filled" | undefined;
  name: string;
  value?: string | string[];
  error?: any;
  multiple?: boolean;
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
  error = null,
  multiple = false,
  handleChanges,
}: DropDownProps) => {
  console.log(options);
  return (
    <Grid item xs>
      <FormControl variant={variant} fullWidth {...(error && { error: true })}>
        <InputLabel>{label}</InputLabel>
        <Select
          multiple={multiple}
          value={value}
          name={name}
          onChange={(e) => handleChanges(e)}
          renderValue={(selected) => (selected as string[]).join(", ")}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {multiple ? (
                <React.Fragment>
                  <Checkbox checked={value!.indexOf(option) > -1} />
                  <ListItemText primary={option} />
                </React.Fragment>
              ) : (
                option
              )}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </Grid>
  );
};
