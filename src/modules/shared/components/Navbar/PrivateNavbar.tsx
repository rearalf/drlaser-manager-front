import { FiLogOut, FiMenu, FiUser } from "react-icons/fi";
import { Link } from "react-router";
import React from "react";
import {
  Box,
  Menu,
  AppBar,
  Toolbar,
  MenuItem,
  useTheme,
  IconButton,
} from "@mui/material";

import AvatarComponent from "@components/AvatarComponent";

const PrivateNavbar = () => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar
      position="relative"
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <IconButton
          size="medium"
          color="primary"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <FiMenu />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Link to="/">
            <img src="/dr-laser.png" />
          </Link>
        </Box>

        <Box>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AvatarComponent
              showTooltip
              placement="top"
              themeStyle={theme}
              name="Ricardo Alfaro"
              tooltipTitle="Ricardo Alfaro"
              disableInteractive={false}
              sx={{
                width: 40,
                height: 40,
              }}
            />
          </IconButton>
          <Menu
            keepMounted
            id="menu-appbar"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                  "& .MuiList-root.MuiList-padding.MuiMenu-list": {
                    padding: 0,
                  },
                },
              },
            }}
          >
            <MenuItem sx={{ display: "flex", gap: 1 }}>
              <FiUser /> Mi perfil
            </MenuItem>
            <MenuItem sx={{ display: "flex", gap: 1 }}>
              <FiLogOut /> Cerrar sesión
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default PrivateNavbar;
