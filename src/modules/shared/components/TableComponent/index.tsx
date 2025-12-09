import { alpha, Paper, Table, TableContainer, useTheme } from "@mui/material";

import type { ITableComponent } from "./types";
import TablePaginationFooter from "./TablePaginationFooter";
import TableBodyContent from "./TableBodyContent";
import TableHeader from "./TableHeader";

const TableComponent = (props: ITableComponent) => {
  const theme = useTheme();

  const {
    totalData,
    pagination,
    loading = false,
    emptyMessage = "No hay datos disponibles",
    handleSetPage,
    handleSetRowsPerPage,
    rowsPerPage = 10,
  } = props;
  const isEmpty = totalData === 0 && !loading;
  const shouldShowPagination = totalData > 0 && pagination && !loading;

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: alpha(theme.palette.primary.main, 0.02),
          border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
          borderRadius: 2,
          ...props.sx,
        }}
      >
        <Table
          stickyHeader
          sx={{ minWidth: 500 }}
          aria-label={props.ariaLabelTable}
          size={props.dense ? "small" : "medium"}
        >
          <TableHeader
            headers={props.headers}
            loading={loading}
            dense={props.dense}
          />

          <TableBodyContent
            loading={loading}
            isEmpty={isEmpty}
            body={props.body}
            headers={props.headers}
            rowsPerPage={rowsPerPage}
            dense={props.dense}
            emptyMessage={emptyMessage}
          />
          {shouldShowPagination && (
            <TablePaginationFooter
              totalData={props.totalData}
              page={props.page}
              rowsPerPage={props.rowsPerPage}
              onSetPage={handleSetPage}
              onSetRowsPerPage={handleSetRowsPerPage}
            />
          )}
        </Table>
      </TableContainer>
    </>
  );
};

export default TableComponent;
