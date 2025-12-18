import type { ReactNode } from "react";
import LocalizationProviderComponent from "./LocalizationProvider";
import ReactThemeProvider from "./ReactThemeProvider";

interface IProviders {
  children: ReactNode;
}

function Providers({ children }: IProviders) {
  return (
    <ReactThemeProvider>
      <LocalizationProviderComponent>{children}</LocalizationProviderComponent>
    </ReactThemeProvider>
  );
}

export default Providers;
