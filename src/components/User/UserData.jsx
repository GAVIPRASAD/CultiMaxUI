import React from "react";
import Appbar from "../Home/Appbar";
import Footer from "../Home/Footer";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Alert, Button, Container, Snackbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { clearErrors, logout } from "../../actions/UserActions";
import { useEffect } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Cultimax from "../../utils/Images/Back/Cultimax.jpg";
import Metadata from "../../more/Metadata";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Loader from "../Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const UserData = ({ user }) => {
  // console.log(user)
  const location = useLocation();
  const navigate = useNavigate();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const { error, isAuthenticated, loading } = useSelector(
    (state) => state.user
  );

  // const { cartItems } = useSelector((state) => state.cart);
  // const { favouriteItems } = useSelector((state) => state.favourite);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    setLoggedOut(true);
    toast.success("Logged Out Successfully")
  };

  const [loggedOut, setLoggedOut] = useState(false);
  useEffect(() => {
    if (error) {
      // toast.error(error);
      dispatch(clearErrors());
    }

    if (loggedOut) {
      navigate(redirect);
    }
  }, [dispatch, error, redirect, loggedOut]);

  //   const [open, setOpen] = useState(false);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Metadata title={user.name} />
          <Appbar />
          <Container
            maxWidth="lg"
            style={{
              height: "85vh",
              //   backgroundColor: "#F9F9EF",
              borderRadius: "10px",
              paddingTop: "0.5rem",
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                  <Item>
                    <Typography
                      variant="h4"
                      component="h4"
                      style={{
                        color: "hsl(54, 100%, 34%)",
                        fontFamily: "Ubuntu",
                      }}
                    >
                      Welcome {user.name} 😍
                    </Typography>
                  </Item>
                </Grid>

                <Grid item xs={12} md={8}>
                  <Item
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      flexWrap: "column",
                    }}
                  >
                    <Grid container>
                      {/* user type  */}
                      <Grid
                        item
                        xs={12}
                        md={12}
                        style={{ display: "flex", alignItems: "flex-start" }}
                      >
                        <Typography
                          variant="h4"
                          component="h4"
                          ml={1}
                          mt={2}
                          style={{
                            color: "hsl(54, 100%, 34%)",
                            fontFamily: "Ubuntu",
                            fontSize: "1.4rem",
                          }}
                        >
                          <span
                            style={{
                              color: "hsl(64, 100%, 6%)",
                              marginRight: "2.8rem",
                            }}
                          >
                            Usertype-
                          </span>

                          {`        ${user.role}`}
                        </Typography>
                      </Grid>

                      {/* username */}
                      <Grid
                        item
                        xs={12}
                        md={12}
                        style={{ display: "flex", alignItems: "flex-start" }}
                      >
                        <Typography
                          variant="h4"
                          component="h4"
                          ml={1}
                          mt={2}
                          style={{
                            color: "hsl(54, 100%, 34%)",
                            fontFamily: "Ubuntu",
                            fontSize: "1.4rem",
                          }}
                        >
                          <span
                            style={{
                              color: "hsl(64, 100%, 6%)",
                              marginRight: "2.4rem",
                            }}
                          >
                            Username-
                          </span>
                          {user.name}
                        </Typography>
                      </Grid>

                      {/* user email  */}
                      <Grid
                        item
                        xs={12}
                        md={12}
                        style={{ display: "flex", alignItems: "flex-start" }}
                      >
                        <Typography
                          variant="h4"
                          component="h4"
                          ml={1}
                          mt={2}
                          style={{
                            color: "hsl(54, 100%, 34%)",
                            fontFamily: "Ubuntu",
                            fontSize: "1.4rem",
                          }}
                        >
                          <span
                            style={{
                              color: "hsl(64, 100%, 6%)",
                              marginRight: "5.2rem",
                            }}
                          >
                            {`Email-`}
                          </span>

                          {`${user.email}`}
                        </Typography>
                      </Grid>

                      {/* userid  */}
                      <Grid
                        item
                        xs={12}
                        md={12}
                        style={{ display: "flex", alignItems: "flex-start" }}
                      >
                        <Typography
                          variant="h4"
                          component="h4"
                          ml={1}
                          mt={2}
                          style={{
                            color: "hsl(54, 100%, 34%)",
                            fontFamily: "Ubuntu",
                            fontSize: "1.4rem",
                          }}
                        >
                          <span
                            style={{
                              color: "hsl(64, 100%, 6%)",
                              marginRight: "4.18rem",
                            }}
                          >
                            User Id-
                          </span>
                          {user._id}
                        </Typography>
                      </Grid>
                    </Grid>

                    {/* logout  */}
                    <div>
                    <Link to={"/cart"}>
                      <Button
                        size="small"
                        variant="contained"
                        color="warning"
                        style={{ fontFamily: "Ubuntu", margin: "0.2rem" }}
                        
                      >
                        <ShoppingCartIcon />
                      </Button>
                      </Link>
                      <Link to={"/favourites"}>
                        <Button
                          size="small"
                          variant="contained"
                          color="warning"
                          style={{
                            fontFamily: "Ubuntu",
                            margin: "0.2rem",
                            // marginRight: "0.7rem",
                          }}
                        >
                          <FavoriteBorderIcon />
                        </Button>
                      </Link>
                      <Link to={"/orders/me"} style={{textDecoration:"none"}}>
                        <Button
                          size="small"
                          variant="contained"
                          color="warning"
                          style={{
                            fontFamily: "Ubuntu",
                            margin: "0.2rem",
                            marginRight: "0.7rem",
                          }}
                        >
                          Orders
                        </Button>
                      </Link>
                     
                        <Button
                          size="small"
                          variant="contained"
                          color="warning"
                          style={{ fontFamily: "Ubuntu", margin: "2rem" }}
                          onClick={logoutHandler}
                        >
                          LogOut
                          <ExitToAppIcon />
                        </Button>
                     
                    </div>

                    {/* usefulLinks */}
                    {/* <div style={{marginLeft:"8.2rem"}}>

                <div mt={2} style={{display:"flex", flexDirection:"column", alignContent:"center", alignItems:"center",  }}> */}
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={3}>
                        <Link to={"/myprofile/forgotpassword"}>
                          <Typography variant="h6">Forgot Password</Typography>
                        </Link>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Link to={"/myprofile/updatepassword"}>
                          <Typography variant="h6">Update Password</Typography>
                        </Link>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Link to={"/myprofile/updateuser"}>
                          <Typography variant="h6">
                            Update User Details
                          </Typography>
                        </Link>
                      </Grid>
                    </Grid>
                    {/* </div>
                </div> */}
                  </Item>
                </Grid>

                {/* //Dashboard */}
                <Grid item xs={12} md={4}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                      <Item>
                        {user.role === "admin" ? (
                          <>
                          <Link to={"/admin/dashboard"} style={{textDecoration:"none"}}>
                            <Typography
                              variant="h4"
                              component="h4"
                              style={{
                                color: "hsl(54, 100%, 34%)",
                                fontFamily: "Ubuntu",
                              }}
                            >
                              Go To DashBoard
                            </Typography>

                            <DashboardIcon
                              color="warning"
                              style={{ fontSize: "16rem" }}
                            />
                          </Link>
                          </>
                        ) : (
                          <>
                            <Link to={"/"}>
                              <img
                                src={Cultimax}
                                alt="CultiMax"
                                style={{
                                  height: "14rem",
                                  width: "20rem",
                                  border: " 6px solid orange",
                                  borderRadius: "10px",
                                  margin: "1rem",
                                }}
                              />
                            </Link>
                          </>
                        )}
                      </Item>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            {/* <Footer /> */}
          </Container>
        </>
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
      />
    </>
  );
};

export default UserData;
