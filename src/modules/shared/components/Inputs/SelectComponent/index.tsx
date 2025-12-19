import { MenuItem, TextField } from "@mui/material";

import type { ISelectComponentProps } from "../types";
import { memo, type ChangeEvent } from "react";

const SelectComponent = memo(
  ({
    id,
    label,
    value,
    options,
    onChange,
    onBlur,
    placeholder = "Seleccionar una opción",
    helperText,
    error,
    ...rest
  }: ISelectComponentProps) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    };

    return (
      <TextField
        {...rest}
        select
        fullWidth
        id={id}
        name={id}
        label={label}
        value={value ?? ""}
        onChange={handleChange}
        onBlur={onBlur}
        error={error}
        helperText={helperText}
        InputLabelProps={{
          shrink: !!value || !!placeholder,
        }}
        SelectProps={{
          displayEmpty: true,
        }}
      >
        <MenuItem value="" disabled>
          <em>{placeholder}</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </TextField>
    );
  },
);

SelectComponent.displayName = "SelectComponent";

export default SelectComponent;
