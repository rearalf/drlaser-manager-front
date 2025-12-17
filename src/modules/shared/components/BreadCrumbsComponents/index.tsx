import {
  Box,
  Breadcrumbs,
  Skeleton,
  Typography,
  useTheme,
} from "@mui/material";
import { linkContentStyle, linkNameStyle } from "./styles";
import { AiOutlineHome } from "react-icons/ai";
import { Link, useMatches } from "react-router";
import { MdNavigateNext } from "react-icons/md";
import type { IBreadCrumbsProps } from "./types";

const BreadCrumbsComponents = (props: IBreadCrumbsProps) => {
  const theme = useTheme();

  const matches = useMatches();

  const breadcrumbs = matches
    .filter((match) => (match.handle as any)?.crumb)
    .map((match) => ({
      pathname: match.pathname || "/",
      crumbName: (match.handle as any).crumb,
    }));

  if (props.loading) {
    return (
      <Box sx={{ display: "flex", gap: 1, alignItems: "center", mb: 2 }}>
        <Skeleton width={80} height={24} variant="rounded" animation="wave" />
        <MdNavigateNext fontSize="small" color="disabled" />
        <Skeleton width={120} height={24} variant="rounded" animation="wave" />
        <MdNavigateNext fontSize="small" color="disabled" />
        <Skeleton width={100} height={24} variant="rounded" animation="wave" />
      </Box>
    );
  }

  return (
    <Breadcrumbs
      component="div"
      aria-label="breadcrumb"
      separator={
        <MdNavigateNext
          size={16}
          style={{ color: theme.palette.text.secondary }}
        />
      }
      sx={{
        "& .MuiBreadcrumbs-separator": {
          mx: 1,
        },
      }}
    >
      {breadcrumbs.map((crumb, index) => {
        const isLast = index === breadcrumbs.length - 1;
        if (isLast) {
          return (
            <Box component="span" key={crumb.crumbName} sx={linkNameStyle}>
              {crumb.crumbName === "Inicio" && (
                <AiOutlineHome
                  size={16}
                  style={{
                    marginRight: "4px",
                    verticalAlign: "middle",
                    color: "inherit",
                  }}
                />
              )}
              {crumb.crumbName}
            </Box>
          );
        }

        return (
          <Link
            to={crumb.pathname}
            key={crumb.pathname}
            style={{ textDecoration: "none" }}
          >
            <Box component="span">
              <Typography sx={linkContentStyle}>
                {index === 0 && (
                  <AiOutlineHome
                    size={16}
                    style={{
                      marginRight: "4px",
                      verticalAlign: "middle",
                      color: "inherit",
                    }}
                  />
                )}
                {crumb.crumbName}
              </Typography>
            </Box>
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadCrumbsComponents;
