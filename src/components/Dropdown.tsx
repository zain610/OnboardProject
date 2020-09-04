import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

type DropDownProps = {
  label: string;
  options: Array<string>;
  helperText?: string;
  variant?: "standard" | "outlined" | "filled" | undefined;
};
export default ({
  label,
  options,
  helperText = "",
  variant = "standard",
}: DropDownProps) => {
  return (
    <FormControl variant={variant} fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select>
        {options.map((city) => (
          <MenuItem key={city} value={city}>
            {city}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};
