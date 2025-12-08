import { Button, Grid, Paper, Tooltip } from "@mui/material";
import { FiRotateCw, FiSearch } from "react-icons/fi";
import type { ChangeEvent } from "react";

import { TextFieldComponent } from "@components/index";

interface IFilterPatientProps {
  search: string;
  handleSearch: () => void;
  handleClearFilter: () => void;
  handleSearchInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FilterPatient = (props: IFilterPatientProps) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
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

        <Button
          variant="contained"
          aria-label="Buscar pacientes"
          onClick={props.handleSearch}
          startIcon={<FiSearch />}
        >
          Buscar
        </Button>

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
      </Grid>
    </Paper>
  );
};

export default FilterPatient;
