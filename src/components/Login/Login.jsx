import bg1 from "../../utils/Images/Back/bg1.jpg";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import CssBaseline from '@mui/material/CssBaseline';
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from '@mui/material/Link';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Appbar from "../Home/Appbar";
import { Link } from "react-router-dom";
import Footer from "../Home/Footer";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to={"/"}>
        CultiMax
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Appbar />

      <Container
        component="main"
        maxWidth="xs"
        style={{
          backgroundColor: "aliceblue",
          padding: "0.2rem 2.2rem",
          marginTop: "3.2rem",
          borderRadius: "15px",
        }}
      >
        {/* <CssBaseline /> */}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "warning.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{color:"rgb(17, 112, 0)"}} >
            Log in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              style={{ borderBottom: "2px solid orange", borderRadius: "10px" }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              style={{ borderBottom: "2px solid orange", borderRadius: "10px" }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="warning"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs style={{ color: "rgb(17, 112, 0)" }}>
                Forgot password?
              </Grid>
              <Grid item>
                <Link to={"/Signup"} style={{color:"rgb(17, 112, 0)"}}>{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} style={{ color: "rgb(17, 112, 0)" }} />
      </Container>
      {/* <Footer/> */}
    </ThemeProvider>
  );
}
