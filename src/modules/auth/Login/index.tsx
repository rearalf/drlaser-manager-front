import {
  Box,
  Button,
  Container,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

import TextFieldComponent from "@components/Inputs/TextFieldComponent";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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

          <TextFieldComponent
            id="email"
            label="Correo electrónico"
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            required
            fullWidth
            autoComplete="email"
            placeholder="ejemplo@correo.com"
            sx={{ marginBottom: "16px" }}
          />

          <TextFieldComponent
            fullWidth
            id="password"
            label="Contraseña"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </IconButton>
              </InputAdornment>
            }
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
