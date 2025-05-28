// SignIn.js
import React, { useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Container,
  CssBaseline,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignIn = ({ onSignIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // Perform authentication logic here
    // For simplicity, this example always considers the sign-in successful
    onSignIn({ firstName: "John", lastName: "Doe" });
    navigate("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper
        elevation={3}
        sx={{
          mt: 8,
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Sign In</Typography>
        <Box component="form" sx={{ mt: 2, width: "100%" }}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSignIn}
          >
            Sign In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignIn;
