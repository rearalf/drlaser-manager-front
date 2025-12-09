import { Box, TableCell, TableRow, Typography } from "@mui/material";

const TableEmptyState = ({ emptyMessage }: { emptyMessage: string }) => {
  return (
    <TableRow>
      <TableCell colSpan={100}>
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: theme.spacing(4),
            minHeight: 200,
            color: theme.palette.text.secondary,
          })}
        >
          <Typography variant="h6" gutterBottom>
            {emptyMessage}
          </Typography>
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default TableEmptyState;
