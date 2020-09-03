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
  overrideClass: string;
  options: Array<string>;
};
export default ({ label, overrideClass, options }: DropDownProps) => {
  return (
    <FormControl className={overrideClass}>
      <InputLabel>{label}</InputLabel>
      <Select>
        {options.map((city) => (
          <MenuItem value={city}>{city}</MenuItem>
        ))}
      </Select>
      <FormHelperText>Some important helper text</FormHelperText>
    </FormControl>
  );
};
