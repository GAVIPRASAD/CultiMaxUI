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
import Metadata from "../../more/Metadata";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, resetPassword } from "../../actions/UserActions";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
    const theme = createTheme();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // const { isAuthenticated } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const { error, success, loading } = useSelector(
      (state) => state.forgotPassword
    );
    let token = useParams().token;
    const navigate = useNavigate();
  
    const resetPasswordSubmit = (e) => {
      e.preventDefault();
  
      const data = new FormData(e.currentTarget);
      const myForm = {
           password: data.get("password"),
          confirmPassword: data.get("confirmPassword")
      };
      // console.log(myForm);
  
      dispatch(resetPassword(token, myForm));
    };

    useEffect(() => {
      if (error) {
        alert(error);
        dispatch(clearErrors());
      }
  
      if (success) {
        alert("Password Updated Successfully");
  
        navigate("/Login");
      }
    }, [dispatch, error,  success]);
    
  return (
    <>
      <Metadata title="Change Password" />
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
              Reset Password
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={resetPasswordSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
              <Grid item xs={12}>
                  <TextField
                    name="password"
                    required
                    fullWidth
                    label="Password"
                    autoFocus
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                Reset Password
              </Button>
            </Box>
          </Box>
        </Container>

        <div style={{ marginTop: "13.2rem", marginRight: "0px" }}>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};

export default ResetPassword;
