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
import {
  clearErrors,
  updateProfile,
  loadUser,
} from "../../actions/UserActions";
import { useEffect } from "react";
import { UPDATE_PROFILE_RESET } from "../../constans/UserConstans";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme();

export default function UpdateUser() {
  const navigate = useNavigate();
  // console.log(location)

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { user } = useSelector((state) => state.user);
  const { error, isUpdated, loading } = useSelector((state) => state.profile);

  const updateUserSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const myForm = {
        name: data.get("name"),
        email: data.get("email"),
    };
    // console.log(myForm)
      dispatch(updateProfile(myForm));

    function refreshPage() {
      window.location.reload(false);
    }
    // navigate("/myprofile");
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      // setAvatarPreview(user.avatar.url)
    }

    if (error) {
      toast.error(error);
      navigate("/myprofile")
      dispatch(clearErrors());
    }

    if (isUpdated) {
      toast.success("Profile updated successfully");
      dispatch(loadUser());

      navigate("/myprofile");

      dispatch({
        type: UPDATE_PROFILE_RESET,
      });
    }
  }, [dispatch, error, toast, isUpdated, user]);

  return (
    <>
      <MetaData title="UpdateProfile" />
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
                Update Profile
              </Typography>
              <Box component="form" onSubmit={updateUserSubmit} sx={{ mt: 1 }}>
                <TextField
                //   autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    borderBottom: "2px solid orange",
                    borderRadius: "10px",
                  }}
                />
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
                  Update Profile
                </Button>
              </Box>
            </Box>
          </Container>
          {/* <Footer /> */}
        </ThemeProvider>
      )}
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
        //limit={2}
      />
    </>
  );
}
