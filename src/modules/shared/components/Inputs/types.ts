import type { Theme } from "@emotion/react";
import type { SxProps } from "@mui/material";

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
