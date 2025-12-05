import { Box, Typography } from "@mui/material";

function NotFoundPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="/404NotFound.svg"
        alt="404 Not Found"
        style={{ maxWidth: "400px", width: "100%", marginBottom: "24px" }}
      />
      <Typography component="h1" variant="h1" sx={{ mb: 4 }}>
        404 - Página no encontrada
      </Typography>
      <Typography component="p" variant="body1" sx={{ mb: 4 }}>
        Lo sentimos, la página que buscas no existe.
      </Typography>
    </Box>
  );
}

export default NotFoundPage;
