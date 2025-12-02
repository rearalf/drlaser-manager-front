import { createTheme } from "@mui/material";

const themeLight = createTheme({
  // Aseguramos que MUI genera variables CSS (aunque las usaremos de nuestra propia definición :root)
  cssVariables: true,

  // 1. PALETA DE COLORES ADAPTADA
  palette: {
    // PRIMARY: Color principal de la clínica (#EDAF8A)
    primary: {
      "100": "#FFF3EF",
      "300": "#FAD0BD",
      main: "#EDAF8A", // MUI utiliza 'main' para el 500
      "500": "#EDAF8A",
      "700": "#C2764E",
      "900": "#8C4729",
      // Otros tonos requeridos por MUI por defecto
      light: "#FAD0BD", // Usamos el 300
      dark: "#C2764E", // Usamos el 700
      contrastText: "#FFFFFF",
    },
    // INFO: Profesionalismo / Confianza (Azul)
    info: {
      "100": "#E6F2FF",
      main: "#4C9FFF", // 500
      "500": "#4C9FFF",
      "700": "#2F7CD9",
      light: "#E6F2FF",
      dark: "#2F7CD9",
      contrastText: "#FFFFFF",
    },
    // ERROR: Peligro / Error (Rosado/Rojo)
    error: {
      main: "#FF87A1", // Usamos el 500 de Danger
      "500": "#FF87A1",
      "700": "#C2587A", // Un tono oscuro basado en Danger 700 de la paleta base (estimado)
      light: "#FFB0C0",
      dark: "#C2587A",
      contrastText: "#FFFFFF",
    },
    // SUCCESS: Salud / Éxito (Verde)
    success: {
      main: "#67D358", // 500
      "500": "#67D358",
      "700": "#429C35",
      light: "#DBF7A0",
      dark: "#429C35",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#ffffff",
      paper: "#f7f7f7",
    },
    text: {
      primary: "#333333",
      secondary: "#777777",
    },
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          // Usamos variables para los bordes del Date Picker
          "&.MuiPickersTextField-root fieldset": {
            borderColor: "var(--color-text-dark)", // #333333
          },
          "&.MuiPickersTextField-root .MuiPickersInputBase-root.MuiPickersOutlinedInput-root:hover fieldset":
            {
              borderColor: "var(--color-primary-500)", // #EDAF8A
            },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          // Bordes por defecto
          "& fieldset": {
            borderColor: "var(--color-text-dark)",
          },
          // Hover normal
          "& .MuiInputBase-root.MuiOutlinedInput-root:hover fieldset": {
            borderColor: "var(--color-primary-500)",
          },
          // Estilos de la caja de texto (textarea)
          "& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-multiline textarea":
            {
              width: "100%",
              height: "100% !important",
              overflowY: "auto !important",
              minHeight: "6.25rem",
            },
          // Hover en estado de Error
          "& .MuiInputBase-root.MuiOutlinedInput-root.Mui-error:hover fieldset":
            {
              borderColor: "var(--color-danger-500)", // Usamos el Danger 500
            },
          // Autocompletado (Autofill)
          "& .MuiInputBase-root.MuiOutlinedInput-root input:-webkit-autofill": {
            // Reemplazar color de fondo hardcodeado. Usaremos un tono muy claro de gris o el 100 de Info.
            boxShadow: "0 0 0 100px var(--color-light-bg) inset",
            carretColor: "var(--color-text-dark)",
            textFillColor: "var(--color-text-dark)",
          },
          // Etiquetas (Labels)
          "& .MuiFormLabel-root.MuiInputLabel-root": {
            color: "var(--color-text-dark)",
          },
          "& .MuiFormLabel-root.MuiInputLabel-root.Mui-error": {
            color: "var(--color-danger-500)",
          },
          "& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused": {
            color: "var(--color-primary-500)",
          },
          "& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused.Mui-error": {
            color: "var(--color-danger-500)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          color: "var(--color-white)",
        },
        // Botón con variante 'inherit' (asumimos que es el estilo secundario)
        containedInherit: {
          backgroundColor: "var(--color-light-bg)", // Fondo muy sutil #F9F9F9
          color: "var(--color-text-dark)",
          "&:hover": {
            backgroundColor: "var(--color-border)", // #E0E0E0
            borderColor: "var(--color-text-light)", // #777777
          },
          "&:active": {
            backgroundColor: "#d5d5d5", // Tono un poco más oscuro
          },
          "&:disabled": {
            backgroundColor: "var(--color-light-bg)",
            color: "var(--color-text-light)",
            borderColor: "var(--color-border)",
          },
          "&:focus": {
            outline: "2px solid var(--color-primary-500)",
            outlineOffset: "2px",
          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          // Manteniendo la eliminación de sombras por defecto
          "&.MuiButton-contained": { boxShadow: "none" },
          "&.MuiButton-contained:hover": { boxShadow: "none" },
          "&.MuiButton-containedInherit": { boxShadow: "none" },
          "&.MuiButton-containedInherit:hover": { boxShadow: "none" },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--color-white)", // Fondo de la barra de aplicación
          color: "var(--color-text-dark)", // Color del texto/íconos en la barra
          boxShadow: "none",
          borderBottom: "1px solid var(--color-border)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--color-light-bg)",
          "& .MuiDrawer-paper": {
            backgroundColor: "var(--color-white)",
            borderRight: "1px solid var(--color-border)",
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          // Nota: Para que el ícono y el mensaje sean blancos (FFF),
          // los colores de fondo de las alertas (success, error, info, etc.)
          // deben ser lo suficientemente oscuros.
          "& .MuiAlert-icon": {
            color: "var(--color-white)",
          },
          "& .MuiAlert-message ": {
            color: "var(--color-white)",
          },
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          "&.MuiTableContainer-root": {
            boxShadow: "none",
            border: "1px solid var(--color-border)",
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "&.MuiTableHead-root ": {
            // Fondo un poco más oscuro, usamos el light-bg o el 100 de info para sutilidad.
            backgroundColor: "var(--color-light-bg)",
            textTransform: "capitalize",
          },
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {
          // Asegurar que el número de paso dentro del ícono tenga el color correcto
          "& .MuiStepLabel-iconContainer .MuiSvgIcon-root .MuiStepIcon-text ": {
            fill: "var(--color-white)",
          },
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "h4", component: "h1" },
          style: {
            fontWeight: 600,
            color: "var(--color-primary-500)", // #EDAF8A
            letterSpacing: "-0.02em",
          },
        },
        {
          props: { variant: "h5", component: "h2" },
          style: {
            fontWeight: 500,
            color: "var(--color-primary-700)", // #C2764E
            letterSpacing: "-0.02em",
          },
        },
        {
          props: { variant: "h6", component: "h3" },
          style: {
            fontWeight: 400,
            color: "var(--color-primary-900)", // #8C4729
            letterSpacing: "-0.02em",
          },
        },
      ],
    },
  },
});

export default themeLight;
