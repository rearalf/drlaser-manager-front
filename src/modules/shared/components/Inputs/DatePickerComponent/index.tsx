import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { memo, useState } from "react";
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

  const [dateError, setDateError] = useState<string | null>(null);

  const handleError = (error: any) => {
    if (error === "minDate") {
      setDateError(
        `La fecha debe ser posterior a ${minDate.format("DD/MM/YYYY")}`,
      );
    } else if (error === "maxDate") {
      setDateError(
        `La fecha debe ser anterior a ${maxDate.format("DD/MM/YYYY")}`,
      );
    } else if (error === "invalidDate") {
      setDateError("Fecha inválida");
    } else {
      setDateError(null);
    }
  };

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
      onError={handleError}
      slotProps={{
        textField: {
          id,
          name: id,
          error: error || !!dateError,
          required,
          fullWidth: true,
          helperText: dateError || helperText,
          onBlur: onBlur,
        },
      }}
      sx={{ width: "100%" }}
    />
  );
});

DatePickerComponent.displayName = "DatePickerComponent";

export default DatePickerComponent;
