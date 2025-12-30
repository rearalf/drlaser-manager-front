import { Button, Grid, Paper, Tooltip } from "@mui/material";
import { FiRotateCw, FiSearch } from "react-icons/fi";
import type { ChangeEvent } from "react";

import { SelectComponent, TextFieldComponent } from "@components/index";

interface IFilterPatientProps {
  search: string;
  handleSearch?: () => void;
  handleClearFilter?: () => void;
  handleSearchInput?: (event: ChangeEvent<HTMLInputElement>) => void;
  status?: string;
  statusOptions?: Array<{ id: number | string; name: string }>;
  handleStatusChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  statusError?: boolean;
}

const Filters = (props: IFilterPatientProps) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: {
          xs: 2,
          sm: 4,
        },
        mb: 4,
      }}
    >
      <Grid
        container
        size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 6 }}
        spacing={3}
        alignItems="center"
        sx={{
          justifyContent: {
            xs: "center",
            md: "flex-start",
          },
        }}
      >
        {props.handleSearchInput && (
          <Grid size={{ xs: 12, sm: 4.5, md: 4, xl: 3 }}>
            <TextFieldComponent
              fullWidth
              id="search"
              type="text"
              inputMode="text"
              onChange={props.handleSearchInput}
              value={props.search}
              placeholder="Juan..."
              ariaLabel="Buscar por nombre"
              label="Buscar por nombre"
              endAdornment={<FiSearch size={24} />}
            />
          </Grid>
        )}

        {props.statusOptions && props.handleStatusChange && (
          <Grid size={{ xs: 12, sm: 4.5, md: 4, xl: 3 }}>
            <SelectComponent
              id="status"
              label="Estado"
              value={props.status || ""}
              options={props.statusOptions}
              onChange={(value) => {
                const syntheticEvent = {
                  target: { value },
                } as ChangeEvent<HTMLInputElement>;
                props.handleStatusChange!(syntheticEvent);
              }}
              error={props.statusError || false}
            />
          </Grid>
        )}

        <Grid
          size={{ xs: 12, md: 4 }}
          gap={{ xs: 2, sm: 6, md: 2 }}
          display="flex"
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          {props.handleSearch && (
            <Button
              variant="contained"
              aria-label="Buscar pacientes"
              onClick={props.handleSearch}
              startIcon={<FiSearch />}
            >
              Buscar
            </Button>
          )}

          {props.handleClearFilter && (
            <Tooltip title="Limpiar filtro">
              <Button
                variant="outlined"
                color="secondary"
                aria-label="Limpiar filtro"
                onClick={props.handleClearFilter}
                startIcon={<FiRotateCw />}
              >
                Limpiar
              </Button>
            </Tooltip>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Filters;
