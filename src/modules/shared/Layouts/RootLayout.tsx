import { Outlet } from "react-router";

import Sidebar from "@components/Sidebar";
import Navbar from "@components/Navbar";
import { Box } from "@mui/material";
import { useSidebarStore } from "@stores/index";

function RootLayout() {
  const sidebarStore = useSidebarStore();

  return (
    <>
      <Navbar isAuthenticated />
      <Sidebar />
      <Box
        component="main"
        sx={{
          marginLeft: {
            xs: 0,
            lg: sidebarStore.open ? "12rem" : "4rem",
          },
          padding: {
            xs: "1rem",
            md: "2rem 3rem",
          },
          transition: "margin-left 0.2s ease-in-out",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
}

export default RootLayout;
