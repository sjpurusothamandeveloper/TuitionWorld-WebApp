import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const DropDown = ({name ,label, value, onChange, options }) => {
  console.log(options, 'newSectionHandler allStaffs  2')
  return (
    <FormControl fullWidth>
      <InputLabel id={`${name}-select-label`}>{label}</InputLabel>
    <Select
      fullWidth
      label={label}
      name={name}
      labelId={`${name}-select-label`}
      id={`${name}-id`}
      defaultValue={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options &&
        options.length > 0 &&
        options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
    </Select>
    </FormControl>
  );
};

export default DropDown;
