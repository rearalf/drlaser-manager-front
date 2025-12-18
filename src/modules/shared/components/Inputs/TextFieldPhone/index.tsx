import { PatternFormat, type NumberFormatValues } from "react-number-format";
import { TextField, type TextFieldProps } from "@mui/material";
import { memo, useCallback } from "react";

interface ITextFieldPhoneProps
  extends Omit<TextFieldProps, "onChange" | "value"> {
  id: string;
  value: string;
  onChange: (value: string) => void;
  format?: string;
  onSubmit?: () => void;
}

const TextFieldPhone = memo((props: ITextFieldPhoneProps) => {
  const {
    format = "####-####",
    placeholder = "0000-0000",
    onChange,
    onSubmit,
    value,
    defaultValue, // eslint-disable-line @typescript-eslint/no-unused-vars
    ...rest
  } = props;

  const handleValueChange = useCallback(
    (values: NumberFormatValues) => {
      // .value entrega el string sin máscara (ej: "12345678")
      // .formattedValue entrega el string con máscara (ej: "1234-5678")
      onChange(values.value);
    },
    [onChange],
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && onSubmit) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <PatternFormat
      {...rest}
      format={format}
      value={value}
      onValueChange={handleValueChange}
      customInput={TextField}
      fullWidth
      variant="outlined"
      placeholder={placeholder}
      type="tel"
      onKeyDown={handleKeyDown}
    />
  );
});

TextFieldPhone.displayName = "TextFieldPhone";

export default TextFieldPhone;
