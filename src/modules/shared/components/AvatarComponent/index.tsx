import { Avatar, Tooltip } from "@mui/material";
import { FiCamera } from "react-icons/fi";

import { stringAvatar } from "@utils/stringAvatar.utils";
import alphaStyles from "@utils/alphaStyles.utils";

import type { IAvatarComponentProps } from "./types";

const AvatarComponent = (props: IAvatarComponentProps) => {
  const ifSxForImage = props.srcImage
    ? {
        bgcolor: alphaStyles(props.themeStyle.palette.primary.main, 0.1),
        border: `2px solid ${alphaStyles(props.themeStyle.palette.primary.main, 0.2)}`,
        transition: "all 0.3s ease-in-out",
        "& svg": {
          color: props.themeStyle.palette.primary.main,
        },
        "&:hover": {
          border: `2px solid ${props.themeStyle.palette.secondary.main}`,
          boxShadow: `0 0 12px ${alphaStyles(props.themeStyle.palette.secondary.main, 0.4)}`,
          "& svg": {
            color: props.themeStyle.palette.secondary.main,
          },
        },
      }
    : {
        bgcolor:
          stringAvatar(props.name)?.bgcolor ||
          alphaStyles(props.themeStyle.palette.primary.main, 0.1),
        border: `2px solid ${alphaStyles(props.themeStyle.palette.primary.main, 0.2)}`,
        transition: "all 0.3s ease-in-out",
        "& svg": {
          color: props.themeStyle.palette.primary.main,
        },
        "&:hover": {
          border: `2px solid ${stringAvatar(props.name)?.bgcolor || props.themeStyle.palette.secondary.main}`,
          boxShadow: `0 0 12px ${alphaStyles(stringAvatar(props.name)?.bgcolor || props.themeStyle.palette.secondary.main, 0.4)}`,
          "& svg": {
            color: props.themeStyle.palette.secondary.main,
          },
        },
      };

  return (
    <Tooltip
      arrow
      title={props.tooltipTitle ? props.tooltipTitle : props.name}
      placement={props.placement}
      disableInteractive={props.disableInteractive}
      disableHoverListener={
        !props.showTooltip ||
        props.tooltipTitle?.trim().length === 0 ||
        props.name.trim().length === 0
      }
    >
      <Avatar
        src={props.srcImage}
        sx={{
          width: {
            xs: 100,
            sm: 100,
            md: 150,
            lg: 150,
            xl: 150,
          },
          height: {
            xs: 100,
            sm: 100,
            md: 150,
            lg: 150,
            xl: 150,
          },
          ...ifSxForImage,
          ...props.sx,
        }}
      >
        {!props.srcImage
          ? stringAvatar(props.name)?.children || (
              <FiCamera
                size={32}
                style={{ transition: "color 0.3s ease-in-out" }}
              />
            )
          : null}
      </Avatar>
    </Tooltip>
  );
};

export default AvatarComponent;
