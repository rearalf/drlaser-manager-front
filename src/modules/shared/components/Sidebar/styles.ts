import type { SxProps, Theme } from "@mui/material";

interface IStyesProps {
  sidebarOpen: boolean;
}

function useSideBarStyes({ sidebarOpen }: IStyesProps) {
  const overlay: SxProps<Theme> = {
    zIndex: (theme) => theme.zIndex.drawer - 1,
    position: "fixed",
    top: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "hsla(0, 0%, 0%, 0.6)",
    left: sidebarOpen ? 0 : "-100vw",
    opacity: sidebarOpen ? 1 : 0,
    transition: "opacity 0.1s ease-in-out",
    display: { lg: "none" },
  };

  const drawer: SxProps<Theme> = (theme) => ({
    "& .MuiDrawer-paper": {
      alignItems: "center",
      overflowX: "hidden",
      backgroundColor: theme.palette.background.paper,
      transform: {
        xs: sidebarOpen ? "translateX(0px)" : "translateX(-1000px)",
        lg: "none",
      },
      transition: {
        xs: "transform 0.2s ease-in-out",
        lg: "width 0.2s ease-in-out",
      },
      width: {
        xs: "12rem",
        md: "12rem",
        lg: sidebarOpen ? "12rem" : "4rem",
      },
      border: "none",
    },
  });

  const contentContainer: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    gap: "4rem",
    width: "100%",
  };

  const header: SxProps<Theme> = {
    display: "flex",
    gap: "0.8rem",
    alignItems: "center",
    fontWeight: 800,
    fontSize: "1.2rem",
    width: "100%",
    justifyContent: "center",
    padding: "1rem 0.8rem 0",
    textDecoration: "none",
    color: "inherit",
  };

  const logo: SxProps<Theme> = {
    width: sidebarOpen ? "5rem" : "2.5rem",
    height: sidebarOpen ? "6rem" : "3rem",
    transition: "all 0.25s ease-in-out",
  };

  const navItems: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: "0.6rem",
  };

  const toggleButton: SxProps<Theme> = (theme) => ({
    position: "fixed",
    top: sidebarOpen ? 110 : 74,
    left: sidebarOpen
      ? { xs: "calc(100vw - 56px)", lg: "calc(12rem - 20px)" }
      : { xs: "-20px", lg: "calc(4rem - 20px)" },
    color: theme.palette.secondary[100],
    background: theme.palette.primary[800],
    width: "40px",
    height: "40px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
    transform: sidebarOpen ? "rotate(0deg)" : "rotate(180deg)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    zIndex: (theme) => theme.zIndex.drawer + 1,
    display: {
      xs: "none",
      lg: "flex",
    },

    "&:hover": {
      backgroundColor: "primary.dark",
      transform: sidebarOpen
        ? "rotate(0deg) scale(1.05)"
        : "rotate(180deg) scale(1.05)",
      boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
    },

    "&:active": {
      transform: sidebarOpen
        ? "rotate(0deg) scale(0.95)"
        : "rotate(180deg) scale(0.95)",
    },
  });

  const navItem: SxProps<Theme> = (theme) => ({
    display: "flex",
    alignItems: "center",
    gap: sidebarOpen ? "0.75rem" : 0,
    fontSize: "0.875rem",
    fontWeight: 500,
    textDecoration: "none",
    color: "text.secondary",
    borderRadius: sidebarOpen ? "8px" : "50%",
    margin: sidebarOpen ? "0 0.5rem" : "0 auto",
    padding: sidebarOpen ? "0.75rem 1rem" : "0.75rem",
    minHeight: "48px",
    width: sidebarOpen ? "auto" : "48px",
    justifyContent: sidebarOpen ? "flex-start" : "center",
    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    overflow: "hidden",

    // Estados normales
    "&:hover": {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.secondary[500],
      transform: sidebarOpen ? "translateX(2px)" : undefined,
      boxShadow: sidebarOpen
        ? "0 2px 8px rgba(0,0,0,0.1)"
        : "0 4px 12px rgba(0,0,0,0.15)",

      "&::before": {
        content: '""',
        position: "absolute",
        left: 0,
        top: "50%",
        transform: "translateY(-50%)",
        width: "3px",
        height: sidebarOpen ? "24px" : "32px",
        backgroundColor: theme.palette.secondary[500],
        borderRadius: "0 2px 2px 0",
        opacity: sidebarOpen ? 1 : 0,
        transition: "opacity 0.2s ease-in-out",
      },

      "& .MuiTypography-root.MuiTypography-body1": {
        color: theme.palette.secondary[500],
      },
    },

    // Estado activo
    "&.active": {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.secondary[500],
      boxShadow: "0 4px 12px rgba(0,0,0,0.3)",

      "&:hover": {
        backgroundColor: theme.palette.background.paper,
        transform: sidebarOpen ? "translateX(2px)" : undefined,
      },

      // Indicador de estado activo
      "&::before": {
        content: '""',
        position: "absolute",
        left: 0,
        top: "50%",
        transform: "translateY(-50%)",
        width: "3px",
        height: sidebarOpen ? "24px" : "32px",
        backgroundColor: theme.palette.secondary[500],
        borderRadius: "0 2px 2px 0",
        opacity: sidebarOpen ? 1 : 0,
        transition: "opacity 0.2s ease-in-out",
      },

      "& .MuiTypography-root.MuiTypography-body1": {
        color: theme.palette.secondary[500],
      },
    },

    // Responsive
    "@media (max-width: 1024px)": {
      margin: "0 0.5rem",
      borderRadius: "8px",
      padding: "0.75rem 1rem",
      justifyContent: "flex-start",
      width: "auto",
    },
  });

  const navItemIcon = (iconSize: number): SxProps<Theme> => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.25rem",
    minWidth: `${iconSize}px`,
    height: `${iconSize}px`,
    transition: "transform 0.2s ease-in-out",
  });

  const navItemText: SxProps<Theme> = {
    opacity: sidebarOpen ? 1 : 0,
    transform: sidebarOpen ? "translateX(0)" : "translateX(-8px)",
    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    whiteSpace: "nowrap",
    fontWeight: "inherit",
    letterSpacing: "0.5px",
    minWidth: sidebarOpen ? "auto" : 0,
    position: sidebarOpen ? "relative" : "absolute",
    zIndex: sidebarOpen ? "auto" : -1,

    // En mobile siempre visible
    "@media (max-width: 1024px)": {
      opacity: 1,
      transform: "translateX(0)",
    },
  };

  return {
    logo,
    drawer,
    header,
    overlay,
    navItem,
    navItems,
    navItemText,
    navItemIcon,
    toggleButton,
    contentContainer,
  };
}

export default useSideBarStyes;
