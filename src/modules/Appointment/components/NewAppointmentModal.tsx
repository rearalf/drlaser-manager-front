/* eslint-disable no-console */
import {
  Autocomplete,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

// Asumo que DialogComponent es un wrapper tuyo sobre el Dialog de MUI
import { DialogComponent } from "@components/index";
import useNewAppointmentModal from "../hooks/useNewAppointmentModal";

interface INewAppointmentModalProps {
  open: boolean;
  handleClose: () => void;
}

const NewAppointmentModal = ({
  open,
  handleClose,
}: INewAppointmentModalProps) => {
  const {
    patient,
    loading,
    inputValue,
    patientOptions,
    handleInputChange,
    handlePatientChange,
  } = useNewAppointmentModal();

  // Función para continuar al paso del doctor
  const handleNextStep = () => {
    if (patient) {
      console.log("Paciente seleccionado:", patient);
      // Aquí iría la lógica para cambiar de vista o habilitar los campos de doctor
    }
  };

  return (
    <DialogComponent
      fullWidth
      maxWidth="sm"
      open={open}
      handleClose={handleClose}
      labelledby="new-appointment-dialog"
      describedby="new-appointment-dialog-description"
      sxContent={{
        minHeight: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h5" // h2 suele ser muy grande para un modal, h5 o h6 es mejor
        component="h2"
        sx={{ mb: 3, textAlign: "center", fontWeight: "bold" }}
      >
        Nueva Cita
      </Typography>

      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid size={{ sm: 12 }}>
          <Autocomplete
            disablePortal
            value={patient}
            onChange={handlePatientChange}
            inputValue={inputValue}
            onInputChange={handleInputChange}
            options={patientOptions}
            loading={loading}
            getOptionLabel={(option) => option.fullName}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            noOptionsText="No se encontraron pacientes"
            fullWidth
            renderInput={(params) => (
              <TextField
                {...params}
                label="Buscar Paciente"
                placeholder="Nombre o DUI..."
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {loading ? <span>Cargando...</span> : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
              />
            )}
          />
        </Grid>
      </Grid>

      <Button
        variant="contained"
        color="info"
        fullWidth
        disabled={!patient}
        onClick={handleNextStep}
      >
        Continuar a selección de Doctor
      </Button>
    </DialogComponent>
  );
};

export default NewAppointmentModal;
