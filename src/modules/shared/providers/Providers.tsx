import type { ReactNode } from "react";
import ReactThemeProvider from "./ReactThemeProvider";

interface IProviders {
  children: ReactNode;
}

function Providers({ children }: IProviders) {
  return <ReactThemeProvider>{children}</ReactThemeProvider>;
}

export default Providers;
