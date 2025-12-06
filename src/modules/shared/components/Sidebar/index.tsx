import { Box, Drawer, IconButton } from "@mui/material";
import { NavLink } from "react-router";

import { FaHeartbeat, FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FiChevronsLeft, FiUsers } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { CiMedicalMask } from "react-icons/ci";

import { useSidebarStore } from "@stores/index";

import useSideBarStyes from "./styles";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  const sidebarStore = useSidebarStore();
  const styles = useSideBarStyes({
    sidebarOpen: sidebarStore.open,
  });

  return (
    <>
      {/* Background Overlay */}
      <Box sx={styles.overlay} onClick={sidebarStore.handleOpenState} />

      <Drawer variant="permanent" sx={styles.drawer}>
        {/* Container */}
        <Box sx={styles.contentContainer}>
          {/* Header */}
          <Box component={NavLink} to="/" sx={styles.header}>
            <Box
              component="img"
              alt="Logo"
              src="/favicons/favicon-32x32.png"
              aria-label="Odonto Smart Logo"
              sx={styles.logo}
            />
          </Box>

          {/* Nav Items */}
          <SidebarMenu
            menuItems={[
              {
                to: "/",
                text: "Dashboard",
                icon: MdOutlineDashboardCustomize,
              },
              {
                text: "Usuarios",
                icon: HiOutlineUserGroup,
                subMenu: [
                  { to: "/doctor", text: "Doctores", icon: CiMedicalMask },
                  { to: "/rol", text: "Roles", icon: FiUsers },
                ],
              },
              { to: "/patient", text: "Pacientes", icon: FaHeartbeat },
              { to: "/appointment", text: "Citas", icon: FaRegCalendarAlt },
            ]}
            navItemStyles={styles.navItem}
            navItemsStyles={styles.navItems}
            navItemTextStyles={styles.navItemText}
            navItemIconStyles={styles.navItemIcon}
          />
        </Box>
      </Drawer>

      {/* Toggle Sidebar Button */}
      <IconButton
        onClick={sidebarStore.handleOpenState}
        sx={styles.toggleButton}
      >
        <FiChevronsLeft size="18" />
      </IconButton>
    </>
  );
};

export default Sidebar;
