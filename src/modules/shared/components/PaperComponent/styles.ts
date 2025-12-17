import type { SxProps, Theme } from "@mui/material";
import { alpha } from "@mui/material/styles";

import type { ColorVariant, SectionStyle } from "./types";

const sectionColorMap: Record<ColorVariant, (theme: Theme) => SectionStyle> = {
  neutral: (theme) => ({
    backgroundColor: theme.palette.primary[400] ?? "",
    borderColor: theme.palette.primary[400] ?? "",
  }),
  success: (theme) => ({
    backgroundColor: theme.palette.success.main ?? "",
    borderColor: theme.palette.success.main ?? "",
  }),
  error: (theme) => ({
    backgroundColor: theme.palette.error.main,
    borderColor: theme.palette.error.main,
  }),
  info: (theme) => ({
    backgroundColor: theme.palette.info.main,
    borderColor: theme.palette.info.main,
  }),
  warning: (theme) => ({
    backgroundColor: theme.palette.warning.main,
    borderColor: theme.palette.warning.main,
  }),
};

const styles =
  (color: ColorVariant): SxProps<Theme> =>
  (theme) => {
    const { backgroundColor, borderColor } = sectionColorMap[color](theme);

    return {
      p: 3,
      mb: 3,
      backgroundColor: alpha(backgroundColor, 0.06),
      border: `1px solid ${alpha(borderColor, 0.2)}`,
      borderRadius: 2,
    };
  };

export default styles;
