import Navbar from "@components/Navbar";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <>
      <Navbar isAuthenticated />
      <Outlet />
    </>
  );
}

export default RootLayout;
