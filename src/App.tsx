import "./App.css";

import Providers from "@modules/shared/providers/Providers";
import { RouterProvider } from "react-router";
import router from "./router/Router";

function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
}

export default App;
