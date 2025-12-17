import { Box, Button, Typography } from "@mui/material";

import { PATIENT_HEADERS } from "../constants/patientList";
import TableComponent from "@components/TableComponent";
import FilterPatient from "../components/FilterPatient";
import usePatientList from "../hooks/usePatientsList";
import RowPatient from "../components/RowPatient";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router";

const PatientsTable = () => {
  const {
    page,
    loading,
    rowsPerPage,
    paginatedData,
    totalDataCount,
    handleSetPage,
    handleSetRowsPerPage,
    handleShowDeleteModal,
    handleShowModalDoctorDetail,
  } = usePatientList();

  return (
    <>
      <Box
        component="header"
        sx={{
          mt: 2,
          mb: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          gap: {
            xs: 2,
            sm: 0,
          },
          textAlign: {
            xs: "center",
            sm: "inherit",
          },
        }}
      >
        <Typography variant="h1" component="h1">
          Pacientes
        </Typography>
        <Button
          type="button"
          color="primary"
          variant="contained"
          component={Link}
          to="/pacientes/nuevo-paciente"
          startIcon={<FaPlus size={10} />}
        >
          Nuevo pacientes
        </Button>
      </Box>

      <FilterPatient
        handleClearFilter={() => {}}
        handleSearch={() => {}}
        handleSearchInput={() => {}}
        search=""
      />

      <TableComponent
        headers={PATIENT_HEADERS}
        body={
          <RowPatient
            patients={paginatedData}
            handleShowDeleteModal={handleShowDeleteModal}
            handleShowModalDetail={handleShowModalDoctorDetail}
          />
        }
        totalData={totalDataCount}
        ariaLabelTable="Tabla de pacientes del hospital"
        pagination={true}
        page={page}
        rowsPerPage={rowsPerPage}
        handleSetPage={handleSetPage}
        handleSetRowsPerPage={handleSetRowsPerPage}
        loading={loading}
        dense={false}
        sx={{ maxHeight: 500 }}
        emptyMessage="No hay pacientes registrados en el sistema."
      />
    </>
  );
};

export default PatientsTable;
