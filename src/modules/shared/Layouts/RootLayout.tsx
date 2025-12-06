import { Outlet } from "react-router";

import Sidebar from "@components/Sidebar";
import Navbar from "@components/Navbar";

function RootLayout() {
  return (
    <>
      <Navbar isAuthenticated />
      <Sidebar />
      <Outlet />
    </>
  );
}

export default RootLayout;
