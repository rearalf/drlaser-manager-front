import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type { ReactNode } from "react";

interface ILocalizationProvider {
  children: ReactNode;
}

function LocalizationProviderComponent({ children }: ILocalizationProvider) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
    </LocalizationProvider>
  );
}

export default LocalizationProviderComponent;
