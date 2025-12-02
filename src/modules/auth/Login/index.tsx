import { Box, Container, Typography, TextField, Button } from "@mui/material";

function LoginPage() {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="form" onSubmit={handleSubmit}>
          <img src="/dr-laser.png" style={{ marginBottom: "36px" }} />
          <Typography component="h1" variant="h1" sx={{ mb: 3 }}>
            Iniciar Sesión
          </Typography>

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo Electrónico"
            name="email"
            autoComplete="email"
            autoFocus
            variant="outlined"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            variant="outlined"
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Entrar
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default LoginPage;
