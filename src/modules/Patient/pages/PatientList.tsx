import { Typography } from "@mui/material";
import FilterPatient from "../components/FilterPatient";

function PatientList() {
  return (
    <>
      <Typography component="h1" variant="h1" sx={{ mb: 4 }}>
        Pacientes
      </Typography>

      <FilterPatient
        handleClearFilter={() => {}}
        handleSearch={() => {}}
        handleSearchInput={() => {}}
        search=""
      />
    </>
  );
}

export default PatientList;
