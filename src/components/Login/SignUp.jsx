import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import CssBaseline from '@mui/material/CssBaseline';
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MetaData from "../../more/Metadata";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Appbar from "../Home/Appbar";
import Footer from "../Home/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { clearErrors, register } from "../../actions/UserActions";
import validator from "validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

export default function SignUp({ history }) {
  const dispatch = useDispatch();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;
  // console.log(user);

  const registerSubmit = (e) => {
    e.preventDefault();

    // const myForm = new FormData();
    const data = new FormData(e.currentTarget);
    const myForm = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    };
    function refreshPage() {
      window.location.reload(false);
    }

    if (name === "" && password === "" && email === "") {
      toast("Enter details");
    }
    if (name.length >= 3) {
      if (validator.isEmail(email)) {
        if (validator.isStrongPassword(password)) {
          dispatch(register(myForm));
          refreshPage();
        } else {
          toast(
            "Enter Valid Password\n{ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 }"
          );
        }
      } else {
        toast("Enter Valid Email");
      }
    } else {
      toast("Name Must be greater than or equal to 3");
    }
  };
  const location = useLocation();
  const navigate = useNavigate();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (error) {
      // alert(error);
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      // history.push(redirect);
      navigate(redirect);
    }
  }, [dispatch, error, alert, history, isAuthenticated]);

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    <ThemeProvider theme={theme}>
      <MetaData title="Signup" />
      <Appbar />
      <Container
        component="main"
        maxWidth="xs"
        style={{
          backgroundColor: "aliceblue",
          // backgroundImage:"url()",
          // backgroundRepeat:"no-repeat",
          opacity: "revert",
          padding: "0.2rem 2.2rem",
          paddingBottom: "15px",
          marginTop: "3.2rem",
          color: "whitesmoke",
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
          <Typography
            component="h1"
            variant="h5"
            style={{ color: "rgb(17, 112, 0)" }}
          >
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={registerSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="firstName"
                  label="Name"
                  autoFocus
                  value={name}
                  onChange={registerDataChange}
                  style={{
                    borderBottom: "2px solid orange",
                    borderRadius: "10px",
                  }}
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  style={{borderBottom:"2px solid orange", borderRadius:"10px"}}
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={registerDataChange}
                  style={{
                    borderBottom: "2px solid orange",
                    borderRadius: "10px",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={registerDataChange}
                  autoComplete="new-password"
                  style={{
                    borderBottom: "2px solid orange",
                    borderRadius: "10px",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  style={{ color: "rgb(17, 112, 0)" }}
                  control={
                    <Checkbox value="allowExtraEmails" color="warning" />
                  }
                  label="I want to receive  updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="warning"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={"/Login"} style={{ color: "rgb(17, 112, 0)" }}>
                  {"Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} style={{ color: "rgb(17, 112, 0)" }} />
      </Container>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ThemeProvider>
  );
}
