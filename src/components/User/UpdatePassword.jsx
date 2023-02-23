import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import CssBaseline from '@mui/material/CssBaseline';
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Appbar from "../Home/Appbar";
import Footer from "../Home/Footer";


import { useDispatch, useSelector } from "react-redux";
import Metadata from "../../more/Metadata";
import Loader from "../Loader/Loader";
import { clearErrors, updatePassword } from "../../actions/UserActions";
import { UPDATE_PASSWORD_RESET } from "../../constans/UserConstans";
import { Navigate, redirect, useNavigate } from "react-router-dom";

const UpdatePassword = () => {
  const theme = createTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
  // const { error, loading } = useSelector((state) => state.profile);
  const { error, isUpdated, loading } = useSelector((state) => state.profile);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const updatePasswordSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const myForm = {
        oldPassword: data.get("oldPassword"),
        newPassword: data.get("newPassword"),
        confirmPassword: data.get("confirmPassword")
    };
    // console.log(myForm);

    dispatch(updatePassword(myForm));
  };


    useEffect(() => {
      if (error) {
        alert(error);
        dispatch(clearErrors());
      }

      if (isUpdated) {
        alert("Profile Updated Successfully");
        dispatch({
          type: UPDATE_PASSWORD_RESET,
        });
        // navigate("/");
        navigate("/myprofile");
      }
    }, [dispatch, error, alert,  isUpdated]);

  return (
    <>
      <Metadata title="Update Password" />
      <ThemeProvider theme={theme}>
        <Appbar />
        <Container
          component="main"
          maxWidth="xs"
          style={{
            backgroundColor: "aliceblue",
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
              Update Password
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={updatePasswordSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="oldPassword"
                    required
                    fullWidth
                    label="Old Password"
                    autoFocus
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    style={{
                      borderBottom: "2px solid orange",
                      borderRadius: "10px",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="newPassword"
                    required
                    fullWidth
                    label="New Password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    style={{
                      borderBottom: "2px solid orange",
                      borderRadius: "10px",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="confirmPassword"
                    required
                    fullWidth
                    label="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={{
                      borderBottom: "2px solid orange",
                      borderRadius: "10px",
                    }}
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
                Update Password
              </Button>
            </Box>
          </Box>
        </Container>

        <div style={{ marginTop: "8.8rem", marginRight: "0px" }}>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};

export default UpdatePassword;
