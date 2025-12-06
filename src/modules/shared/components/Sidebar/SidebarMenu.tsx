import { Box } from "@mui/material";
import type { Theme, SxProps } from "@mui/material/styles";
import type { IconType } from "react-icons";
import SidebarItem from "./SidebarItem";

interface ISubMenuItem {
  to: string;
  text: string;
  icon?: IconType;
  iconSize?: number;
}

interface IMenuItem {
  to?: string;
  text: string;
  icon: IconType;
  iconSize?: number;
  subMenu?: ISubMenuItem[];
}

interface ISidebarMenuProps {
  menuItems: IMenuItem[];
  navItemsStyles: SxProps<Theme>;
  navItemStyles: SxProps<Theme>;
  navItemTextStyles: SxProps<Theme>;
  navItemIconStyles: (iconSize: number) => SxProps<Theme>;
}

const SidebarMenu = ({
  menuItems,
  navItemsStyles,
  navItemStyles,
  navItemTextStyles,
  navItemIconStyles,
}: ISidebarMenuProps) => {
  return (
    <Box sx={navItemsStyles}>
      {menuItems.map((item, index) => (
        <SidebarItem
          key={item.to || `menu-${index}`}
          to={item.to}
          text={item.text}
          icon={item.icon}
          iconSize={item.iconSize || 24}
          itemStyles={navItemStyles}
          itemTextStyles={navItemTextStyles}
          itemsIconStyles={navItemIconStyles}
          subMenu={item.subMenu}
        />
      ))}
    </Box>
  );
};

export default SidebarMenu;
