import { Paper } from "@mui/material";

import type { IPaperComponentProps } from "./types";
import styles from "./styles";

const PaperComponent = ({
  color = "neutral",
  children,
}: IPaperComponentProps) => {
  return (
    <Paper sx={styles(color)} elevation={0}>
      {children}
    </Paper>
  );
};

export default PaperComponent;
