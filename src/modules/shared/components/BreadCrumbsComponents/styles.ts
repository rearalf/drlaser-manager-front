import type { Theme } from "@mui/material/styles";

export const linkNameStyle = (theme: Theme) => ({
  fontSize: "0.875rem",
  fontWeight: 500,
  px: 1,
  py: 0.5,
  color: theme.palette.secondary[100],
  borderRadius: 1,
  bgcolor: theme.palette.secondary.main,
});

export const linkContentStyle = (theme: Theme) => ({
  display: "flex",
  alignItems: "center",
  gap: 0.5,
  color: theme.palette.text.secondary,
  fontSize: "0.875rem",
  fontWeight: 500,
  px: 1,
  py: 0.5,
  borderRadius: 1,
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    color: theme.palette.primary[100],
    bgcolor: theme.palette.secondary.main,
    transform: "translateY(-1px)",
  },
});
