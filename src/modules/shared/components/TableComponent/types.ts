import type { SxProps, Theme } from "@mui/material";
import type { ReactNode } from "react";

export type HeaderObject = {
  title: string;
  key: string;
  align?: "right" | "left" | "center" | "inherit" | "justify";
};

export interface ITableComponent {
  page: number;
  body: ReactNode;
  headers: HeaderObject[] | ReactNode;
  totalData: number;
  pagination: boolean;
  rowsPerPage: number;
  ariaLabelTable: string;
  loading?: boolean;
  emptyMessage?: string;
  className?: string;
  dense?: boolean;
  sx?: SxProps<Theme> | undefined;
  handleSetPage: (value: number) => void;
  handleSetRowsPerPage: (value: number) => void;
}

export interface ITablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}
