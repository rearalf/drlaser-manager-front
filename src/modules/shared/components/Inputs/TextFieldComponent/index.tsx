import { TextField } from "@mui/material";

import type { ITextFieldBasicProps } from "../types";

const TextFieldComponent = (props: ITextFieldBasicProps) => {
  return (
    <TextField
      minRows={4}
      id={props.id}
      sx={props.sx}
      name={props.id}
      variant="outlined"
      label={props.label}
      value={props.value}
      error={props.error}
      disabled={props.disabled}
      required={props.required}
      onChange={props.onChange}
      onBlur={props.handleOnBlur}
      fullWidth={props.fullWidth}
      inputMode={props.inputMode}
      multiline={props.multiline}
      aria-label={props.ariaLabel}
      helperText={
        props.helperText
          ? props.helperText
          : props.maxLength
            ? `${String(props.value).length} / ${props.maxLength} caracteres`
            : undefined
      }
      placeholder={props.placeholder}
      autoComplete={props.autoComplete}
      onKeyDown={(e) => {
        if (e.key === "Enter" && props.onSubmit) {
          e.preventDefault();
          props.onSubmit();
        }
      }}
      type={props.type}
      InputProps={{
        minRows: 1,
        maxRows: 10,
        endAdornment: props.endAdornment ?? undefined,
      }}
    />
  );
};

export default TextFieldComponent;
