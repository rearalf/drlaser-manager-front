import { createTheme } from "@mui/material";

const themeLight = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      "100": "#F3F3F3",
      "200": "#E8E8E8",
      "300": "#BABABA",
      "400": "#767676",
      main: "#1C1C1C",
      "500": "#1C1C1C",
      "600": "#181414",
      "700": "#140E0F",
      "800": "#10080A",
      "900": "#0D0508",
      contrastText: "#FFFFFF",
    },
    secondary: {
      "100": "#FEF5E8",
      "200": "#FDEAD2",
      "300": "#F9DABB",
      "400": "#F4C8A7",
      main: "#EDAF8A",
      "500": "#EDAF8A",
      "600": "#CB8564",
      "700": "#AA5F45",
      "800": "#893D2C",
      "900": "#71251A",
      contrastText: "#FFFFFF",
    },
    info: {
      "100": "#CFEDFF",
      "200": "#9FD7FF",
      "300": "#70BDFF",
      "400": "#4CA4FF",
      main: "#117CFF",
      "500": "#117CFF",
      "600": "#0C60DB",
      "700": "#0847B7",
      "800": "#053293",
      "900": "#03237A",
      contrastText: "#FFFFFF",
    },
    error: {
      "100": "#FFE5D9",
      "200": "#FFC6B3",
      "300": "#FF9F8D",
      "400": "#FF7B71",
      main: "#FF4245",
      "500": "#FF4245",
      "600": "#DB3041",
      "700": "#B7213D",
      "800": "#931538",
      "900": "#7A0C34",
      contrastText: "#FFFFFF",
    },
    success: {
      "100": "#DFFCD8",
      "200": "#B9F9B1",
      "300": "#89ED87",
      "400": "#65DB6F",
      main: "#38C450",
      "500": "#38C450",
      "600": "#28A84A",
      "700": "#1C8D44",
      "800": "#11713D",
      "900": "#0A5E38",
      contrastText: "#FFFFFF",
    },
    warning: {
      "100": "#FCF9CB",
      "200": "#FAF298",
      "300": "#F0E364",
      "400": "#E1D03D",
      main: "#CEB706",
      "500": "#CEB706",
      "600": "#B19B04",
      "700": "#948003",
      "800": "#776501",
      "900": "#625201",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F3F3F3",
    },
    text: {
      primary: "#1C1C1C",
      secondary: "#767676",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          boxShadow: "none",
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.primary,
        }),
        h1: ({ theme }) => ({
          fontSize: "2.4rem",
          fontWeight: 800,
          color: theme.palette.primary["700"],
          letterSpacing: "-0.03em",
        }),
        h2: ({ theme }) => ({
          fontSize: "2rem",
          fontWeight: 700,
          color: theme.palette.primary["600"],
        }),
        h3: ({ theme }) => ({
          fontSize: "1.8rem",
          fontWeight: 600,
          color: theme.palette.primary["500"],
        }),
        h4: ({ theme }) => ({
          fontSize: "1.6rem",
          fontWeight: 600,
          color: theme.palette.primary["400"],
        }),
        h5: ({ theme }) => ({
          fontSize: "1.4rem",
          fontWeight: 500,
          color: theme.palette.primary["300"],
        }),
        subtitle1: ({ theme }) => ({
          fontSize: "1rem",
          color: theme.palette.primary["200"],
          fontStyle: "italic",
        }),
        body1: ({ theme }) => ({
          fontSize: "1rem",
          color: theme.palette.text.primary,
          lineHeight: 1.6,
        }),
        body2: ({ theme }) => ({
          fontSize: "0.875rem",
          color: theme.palette.text.secondary,
        }),
        caption: ({ theme }) => ({
          fontSize: "0.75rem",
          color: theme.palette.secondary["500"],
          textTransform: "uppercase",
          fontWeight: 500,
        }),
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&:hover .MuiInputLabel-root": {
            color: theme.palette.secondary.main,
          },
          "&:hover .MuiInputLabel-root.Mui-error": {
            color: theme.palette.error[600],
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& fieldset.MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary[300],
          },
          "&:hover fieldset.MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.secondary.main,
          },
          "&.Mui-focused fieldset.MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.secondary[500],
          },
          "& .MuiInputBase-input.MuiOutlinedInput-input:-webkit-autofill": {
            "-webkit-box-shadow": `0 0 0 100px ${theme.palette.background.paper} inset`,
            "-webkit-text-fill-color": theme.palette.text.primary,
          },
          "&.Mui-error fieldset": {
            borderColor: theme.palette.error[300],
          },
          "&.Mui-error:hover fieldset": {
            borderColor: theme.palette.error.main,
          },
          "&.Mui-error.Mui-focused fieldset": {
            borderColor: theme.palette.error[500],
          },
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&": {
            color: theme.palette.text.secondary,
          },
          "&.Mui-focused": {
            color: theme.palette.secondary[600],
          },
          "&.Mui-error": {
            color: theme.palette.error[500],
          },
          "&.Mui-error.Mui-focused": {
            color: theme.palette.error[700],
          },
        }),
      },
    },
  },
});

export default themeLight;
