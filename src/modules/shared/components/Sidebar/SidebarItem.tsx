import { useState, useEffect } from "react";
import {
  Box,
  Collapse,
  type SxProps,
  type Theme,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router";
import type { ComponentType } from "react";
import type { IconType } from "react-icons";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { useSidebarStore } from "@stores/index";

interface ISubMenuItem {
  to: string;
  text: string;
  icon?: IconType;
  iconSize?: number;
}

interface ISidebarItemProps {
  to?: string;
  icon: ComponentType<{ size?: number }>;
  text: string;
  iconSize: number;
  itemStyles: SxProps<Theme>;
  itemTextStyles: SxProps<Theme>;
  itemsIconStyles: (iconSize: number) => SxProps<Theme>;
  subMenu?: ISubMenuItem[];
}

const SidebarItem = ({
  to,
  icon: Icon,
  text,
  itemTextStyles,
  iconSize = 24,
  itemStyles,
  itemsIconStyles,
  subMenu,
}: ISidebarItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const sidebarStore = useSidebarStore();
  const hasSubMenu = subMenu && subMenu.length > 0;

  useEffect(() => {
    if (!sidebarStore.open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsExpanded(false);
    }
  }, [sidebarStore.open]);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  if (hasSubMenu) {
    return (
      <Box>
        {/* Item principal con submenú */}
        <Box onClick={toggleExpand} sx={itemStyles}>
          <Box sx={itemsIconStyles(iconSize)}>
            <Icon size={iconSize} />
          </Box>
          <Typography component="span" sx={itemTextStyles}>
            {text}
          </Typography>
          {sidebarStore.open && (
            <Box sx={itemsIconStyles(20)}>
              {isExpanded ? (
                <MdExpandLess size={20} />
              ) : (
                <MdExpandMore size={20} />
              )}
            </Box>
          )}
        </Box>

        {/* Submenú colapsable */}
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
          <Box sx={{ pl: 2 }}>
            {subMenu.map((subItem) => (
              <SidebarItem
                key={subItem.to}
                to={subItem.to}
                text={subItem.text}
                icon={subItem.icon || Icon}
                iconSize={subItem.iconSize || 20}
                itemStyles={itemStyles}
                itemTextStyles={itemTextStyles}
                itemsIconStyles={itemsIconStyles}
              />
            ))}
          </Box>
        </Collapse>
      </Box>
    );
  }

  return (
    <Box component={NavLink} to={to!} sx={itemStyles}>
      {/* Icono */}
      <Box sx={itemsIconStyles(iconSize)}>
        <Icon size={iconSize} />
      </Box>

      {/* Texto */}
      <Typography component="span" sx={itemTextStyles}>
        {text}
      </Typography>
    </Box>
  );
};

export default SidebarItem;
