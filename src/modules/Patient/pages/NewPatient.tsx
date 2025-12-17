import { Box, Typography } from "@mui/material";

import { BreadCrumbsComponents, PersonalInfoSection } from "@components/index";

function NewPatient() {
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
          Nuevo paciente
        </Typography>
      </Box>

      <PersonalInfoSection />
    </>
  );
}

export default NewPatient;
