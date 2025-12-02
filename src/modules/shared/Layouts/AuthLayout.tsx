import { Outlet } from "react-router";

import Navbar from "@components/Navbar";

function AuthLayout() {
  return (
    <>
      <Navbar isAuthenticated={false} />
      <Outlet />
    </>
  );
}

export default AuthLayout;
