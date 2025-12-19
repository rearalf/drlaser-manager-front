import { Checkbox, FormControlLabel } from "@mui/material";
import { memo } from "react";

import type { ICheckboxComponentProps } from "../types";

const CheckboxComponent = memo(
  ({
    id,
    label,
    checked,
    onChange,
    disabled,
    ...rest
  }: ICheckboxComponentProps) => {
    const handleChange = (
      _event: React.ChangeEvent<HTMLInputElement>,
      isChecked: boolean,
    ) => {
      onChange(isChecked);
    };

    return (
      <FormControlLabel
        label={label}
        disabled={disabled}
        control={
          <Checkbox
            {...rest}
            id={id}
            name={id}
            checked={checked}
            onChange={handleChange}
          />
        }
      />
    );
  },
);

CheckboxComponent.displayName = "CheckboxComponent";

export default CheckboxComponent;
