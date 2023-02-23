import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import CssBaseline from '@mui/material/CssBaseline';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockResetIcon from "@mui/icons-material/LockReset";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Appbar from "../Home/Appbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Home/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Loader from "../Loader/Loader";
import MetaData from "../../more/Metadata";
import { forgotPassword, clearErrors } from "../../actions/UserActions";



const theme = createTheme();

export default function ForgotPassword() {
  const navigate = useNavigate();
  // console.log(location)

  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const forgotPasswordSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const myForm = {
      email: data.get("email"),
    };
    // console.log(myForm)
      dispatch(forgotPassword(myForm));

    function refreshPage() {
      window.location.reload(false);
    }
    navigate("/")
  };

  React.useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (message) {
      alert(message);
      navigate("/");
    }
  }, [dispatch, error, message]);

  return (
    <>
      <MetaData title="Forgot Password" />
      {loading ? (
        <Loader />
      ) : (
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
                <LockResetIcon />
              </Avatar>
              <Typography
                component="h1"
                variant="h5"
                style={{ color: "rgb(17, 112, 0)" }}
              >
                Forgot Password
              </Typography>
              <Box
                component="form"
                onSubmit={forgotPasswordSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  //   autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                  style={{
                    borderBottom: "2px solid orange",
                    borderRadius: "10px",
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="warning"
                  sx={{ mt: 3, mb: 12 }}
                >
                  Send Email
                </Button>
              </Box>
            </Box>
          </Container>
          {/* <Footer /> */}
        </ThemeProvider>
      )}
    </>
  );
}
