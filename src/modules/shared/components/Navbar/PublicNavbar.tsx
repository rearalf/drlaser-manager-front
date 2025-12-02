import { AppBar, Toolbar, Box, useTheme } from "@mui/material";
import { Link } from "react-router";

const PublicNavbar = () => {
  const theme = useTheme();
  return (
    <AppBar
      position="relative"
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Link to="/login">
            <img src="/dr-laser.png" />
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default PublicNavbar;
