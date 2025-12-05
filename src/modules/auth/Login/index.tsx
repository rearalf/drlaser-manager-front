import { Link as RouterLink } from "react-router";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import {
  Box,
  Link,
  Button,
  Container,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";

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
          <img src="/dr-laser.png" style={{ marginBottom: 28 }} />
          <Typography component="h1" variant="h1" sx={{ mb: 4 }}>
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

          <Typography variant="body2" sx={{ mt: 2, textAlign: "right" }}>
            <Link
              component={RouterLink}
              to="/forgot-password"
              underline="hover"
              sx={{ cursor: "pointer", fontWeight: 500 }}
            >
              ¿Has olvidado tu contraseña?
            </Link>
          </Typography>

          <Button fullWidth type="submit" variant="contained" sx={{ mt: 4 }}>
            Entrar
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default LoginPage;
