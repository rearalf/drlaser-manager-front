import BreadCrumbsComponents from "@components/BreadCrumbsComponents";
import { Box, Button, Typography } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import { useState, type ChangeEvent } from "react";

import { Filters } from "@components/index";
import { APPOINTMENT_STATUS_LABELS } from "@modules/shared/constants/Appointment.const";
import NewAppointmentModal from "../components/NewAppointmentModal";

function AppointmentList() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const statusOptions = Object.entries(APPOINTMENT_STATUS_LABELS).map(
    ([key, label]) => ({
      id: key,
      name: label as string,
    }),
  );

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
  };

  const handleSearch = () => {
    // Lógica de búsqueda
    // console.log({ search, status });
  };

  const handleClearFilter = () => {
    setSearch("");
    setStatus("");
  };

  return (
    <>
      <BreadCrumbsComponents />

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
          Citas
        </Typography>
        <Button
          type="button"
          color="primary"
          variant="contained"
          startIcon={<FaPlus size={10} />}
        >
          Nuevo cita
        </Button>
      </Box>

      <Filters
        search={search}
        handleSearchInput={handleSearchInput}
        handleSearch={handleSearch}
        handleClearFilter={handleClearFilter}
        status={status}
        statusOptions={statusOptions}
        handleStatusChange={handleStatusChange}
      />

      <NewAppointmentModal handleClose={() => {}} open />
    </>
  );
}

export default AppointmentList;
