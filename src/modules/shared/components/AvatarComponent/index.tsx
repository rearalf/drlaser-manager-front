import { Avatar, Tooltip } from "@mui/material";
import { FiCamera } from "react-icons/fi";

import { stringAvatar } from "@utils/stringAvatar.utils";
import alphaStyles from "@utils/alphaStyles.utils";

import type { IAvatarComponentProps } from "./types";

const AvatarComponent = (props: IAvatarComponentProps) => {
  const ifSxForImage = props.srcImage
    ? {
        width: 100,
        height: 100,
        bgcolor: alphaStyles(props.themeStyle.palette.primary.main, 0.1),
        border: `2px solid ${alphaStyles(props.themeStyle.palette.primary.main, 0.2)}`,
      }
    : {
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
        bgcolor:
          stringAvatar(props.name)?.bgcolor ||
          alphaStyles(props.themeStyle.palette.primary.main, 0.1),
        border: `2px solid ${alphaStyles(props.themeStyle.palette.primary.main, 0.2)}`,
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
      <Avatar src={props.srcImage} sx={{ ...ifSxForImage, ...props.sx }}>
        {!props.srcImage
          ? stringAvatar(props.name)?.children || (
              <FiCamera
                size={32}
                color={props.themeStyle.palette.primary.main}
              />
            )
          : null}
      </Avatar>
    </Tooltip>
  );
};

export default AvatarComponent;
