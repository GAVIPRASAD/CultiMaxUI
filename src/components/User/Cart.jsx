import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import Appbar from "../Home/Appbar";
import { useDispatch, useSelector } from "react-redux";
import Metadata from "../../more/Metadata";
import Loader from "../Loader/Loader";
import NotFound from "../../more/NotFound";
import CartCard from "./CartCard";
import { addItemsToCart, removeItemsFromCart } from "../../actions/CartAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  let Price = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  let totalPrice = Price;

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return alert("Product Stock Limited");
    }
    if (newQty <= 9) {
      dispatch(addItemsToCart(id, newQty));
    }
    // toast.error("Max. 9 Items are allowed")
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }

    dispatch(addItemsToCart(id, newQty));
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/checkout")
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <NotFound error="Add Items To Cart " />
      ) : (
        <>
          <Metadata title="Cart" />
          <Appbar />
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
                Your Cart
              </Typography>
            </Item>
          </Grid>
          <Container
            maxWidth="lg"
            style={{
              height: "85vh",
              //   backgroundColor: "#F9F9EF",
              borderRadius: "10px",
              paddingTop: "0.5rem",
            }}
          >
            <Box sx={{ flexGrow: 1 }} maxwidth="lg">
              <Grid container spacing={2}>
                <Grid item xs={12} md={10}>
                  {cartItems &&
                    cartItems.map((item) => (
                      <Item
                        key={item.product}
                        style={{
                          display: "flex",
                          marginBottom: "0.8rem",
                          borderBottom: "4px solid orange",
                          borderBottomRadius: "10px",
                        }}
                      >
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={8}>
                            <CartCard
                              item={item}
                              deleteCartItems={deleteCartItems}
                            />
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            md={3}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <button
                              style={{
                                border: "none",
                                backgroundColor: "white",
                                fontSize: "2.0rem",
                                color: "orange",
                              }}
                              onClick={() =>
                                decreaseQuantity(item.product, item.quantity)
                              }
                            >
                              -
                            </button>
                            <span
                              style={{
                                fontFamily: "Ubuntu",
                                fontSize: "1.2rem",
                                margin: "0rem 0.2rem",
                                marginTop: "1.4rem",
                              }}
                            >
                              {item.quantity}
                            </span>
                            <button
                              style={{
                                border: "none",
                                backgroundColor: "white",
                                fontSize: "1.6rem",
                                color: "orange",
                              }}
                              onClick={() =>
                                increaseQuantity(
                                  item.product,
                                  item.quantity,
                                  item.stock
                                )
                              }
                            >
                              +
                            </button>
                            {/* <Typography component="h6" >price</Typography> */}
                            <span
                              style={{
                                margin: "0.9rem 0.6rem",
                                marginTop: "1.6rem",
                                fontSize: "1.1rem",
                                color: "rgb(213, 156, 0)",
                              }}
                            >Total: {` `}
                              <span style={{ color: "rgb(113, 140, 0)" }}>
                                <b>
                                {totalPrice}
                                </b> 
                              </span>
                            </span>
                          </Grid>
                        </Grid>
                      </Item>
                    ))}
                </Grid>
              </Grid>
              <Button onClick={checkoutHandler} variant= "contained" color="warning" style={{fontFamily:"Ubuntu", fontSize:"1.1rem"}}>
                CheckOut
              </Button>
            </Box>
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
              limit={2}
            />
           
          </Container>
        </>
      )}
    </>
  );
}
