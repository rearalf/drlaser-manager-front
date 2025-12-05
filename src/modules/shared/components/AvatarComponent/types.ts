import type { Theme, SxProps } from "@mui/material/styles";

export interface IAvatarComponentProps {
  themeStyle: Theme;
  name: string;
  srcImage?: string;
  tooltipTitle?: string;
  disableInteractive?: boolean;
  showTooltip?: boolean;
  sx?: SxProps<Theme> | undefined;
  placement?:
    | "bottom"
    | "bottom-end"
    | "bottom-start"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top"
    | undefined;
}
