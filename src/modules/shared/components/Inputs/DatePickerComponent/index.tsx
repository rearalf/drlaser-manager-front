import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { memo } from "react";
import dayjs from "dayjs";

import type { IDatePickerComponent } from "../types";

const DatePickerComponent = memo((props: IDatePickerComponent) => {
  const {
    id,
    label,
    value,
    error,
    onChange,
    required,
    disabled,
    helperText,
    onBlur,
    minDate = dayjs().subtract(100, "year"),
    maxDate = dayjs().subtract(1, "year"),
  } = props;
  return (
    <DatePicker
      label={label}
      value={value}
      onChange={onChange}
      disabled={disabled}
      minDate={minDate}
      maxDate={maxDate}
      format="DD/MM/YYYY"
      closeOnSelect
      slotProps={{
        textField: {
          id,
          name: id,
          error,
          required,
          fullWidth: true,
          helperText: helperText || "DD/MM/YYYY",
          onBlur: onBlur,
        },
      }}
      sx={{ width: "100%" }}
    />
  );
});

DatePickerComponent.displayName = "DatePickerComponent";

export default DatePickerComponent;
