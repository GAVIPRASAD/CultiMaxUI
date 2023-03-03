import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button, Container, Input, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Appbar from "../Home/Appbar";
import { createOrder } from "../../actions/OrderAction";
import { useNavigate } from "react-router-dom";

export default function PaymentForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { error, loading } = useSelector((state) => state.order);

  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  // console.log(orderInfo)

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
  };
  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice:1,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };
  order.paymentInfo = {
    id: Math.floor(Math.random() * 10000000000001),
    status: "success",
  };

  const handleSubmit = () => {
    if (dispatch(createOrder(order))) {
      
      navigate("/success")
    }
    else{

    }
  };

  return (
    <>
      <Appbar />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography
            component="h1"
            variant="h4"
            m={3}
            align="center"
            color="orange"
          >
            Complete Payment
          </Typography>
          <React.Fragment>
            <Typography variant="h6" gutterBottom>
              Payment method
              <TextField
                required
                id="cardName"
                label="Payment Method"
                fullWidth
                autoComplete="cc-name"
                variant="standard"
                value={"Cash On Delivery"}
                style={{margin:"1.5rem"}}
              />
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                {/* <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          /> */}
                <span
                  // type="submit"
                  style={{
                    backgroundColor: "aliceblue",
                    border: "none",
                    padding: "10px",
                  }}
                >
                  Total Amount - ₹ {orderInfo && orderInfo.totalPrice} 
                </span>
              </Grid>
              {/*
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>*/}
              <Button
                onClick={handleSubmit}
                sx={{ mt: 3, ml: 1 }}
                variant="contained"
                color="success"
              >
                Place Order
              </Button>
              {/* <Input
                id="margin-none"
                size="small"
                fullWidth
                readOnly
                style={{ fontSize: "5rem" }}
              /> */}
            </Grid>
          </React.Fragment>
        </Paper>
      </Container>
    </>
  );
}
