/* eslint-disable @typescript-eslint/naming-convention */
// src/mui.d.ts

import "@mui/material/styles";

// 1. Extiende la interfaz de Color de la Paleta
declare module "@mui/material/styles" {
  interface PaletteColor {
    // Añade las claves numéricas que usas en tu tema
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
  }

  // 2. Extiende la interfaz de la Paleta para incluir los nuevos colores de la Paleta
  interface SimplePaletteColorOptions {
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
  }
}
