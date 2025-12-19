import type { Theme } from "@emotion/react";
import type { CheckboxProps, SxProps, TextFieldProps } from "@mui/material";
import type { Dayjs } from "dayjs";

export interface ITextFieldBasicProps {
  id: string;
  label?: string;
  error?: boolean;
  fullWidth: boolean;
  required?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  helperText?: string;
  multiline?: boolean;
  placeholder?: string;
  autoComplete?: string;
  value: string | number;
  sx?: SxProps<Theme> | undefined;
  type: React.HTMLInputTypeAttribute;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  endAdornment?: React.ReactNode;
  handleOnBlur?: () => void;
  onSubmit?: () => void;
  maxLength?: number;
  inputMode?:
    | "email"
    | "search"
    | "tel"
    | "text"
    | "url"
    | "none"
    | "numeric"
    | "decimal";
}

export interface IDatePickerComponent {
  id: string;
  label: string;
  value: Dayjs | null;
  onChange: (newValue: Dayjs | null) => void;
  error?: boolean;
  required?: boolean;
  disabled?: boolean;
  helperText?: string;
  onBlur?: () => void;
  minDate?: Dayjs;
  maxDate?: Dayjs;
}

export interface IBasicIdNameDescription {
  id: number | string;
  name: string;
}

export interface ISelectComponentProps
  extends Omit<TextFieldProps, "onChange" | "value"> {
  id: string;
  options: IBasicIdNameDescription[];
  value: number | string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

export interface ICheckboxComponentProps
  extends Omit<CheckboxProps, "onChange"> {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}
