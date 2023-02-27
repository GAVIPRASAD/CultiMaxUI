import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { saveShippingInfo } from "../../actions/CartAction";
import { Button } from "@mui/material";
export default function AddressForm() {
  const dispatch = useDispatch();

  const { shippingInfo } = useSelector((state) => state.cart);

  const [name, setName] = useState(shippingInfo.name);
  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [state, setState] = useState(shippingInfo.state);
  const [zip, setZip] = useState(shippingInfo.zip);
  const [country, setCountry] = useState(shippingInfo.country);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

  const shippingSubmit = (e) => {
    e.preventDefault();
    // console.log("true")
    if (phoneNo.length < 10 && phoneNo.length > 10) {
      alert("Phone Number should be 10 digits");
      return;
    }
    else{
    alert("Address Saved")
    dispatch(
      saveShippingInfo({ name, address, city, state, zip, country, phoneNo })
    );
    }
    // history.push("/order/confirm");
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <form onSubmit={shippingSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="num"
              name="Number"
              label="Number"
              fullWidth
              variant="standard"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              variant="standard"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Grid>
          {/* <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid> */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              value={city}
              onChange={(e) => setCity(e.target.value)}
              autoComplete="shipping address-level2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="State/Province/Region"
              value={state}
              onChange={(e) => setState(e.target.value)}
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              variant="standard"
            />
             <Button
            variant="contained"
            onClick={shippingSubmit}
            color="warning"
            sx={{ mt: 3, ml: 21 }}
          >Save </Button>
          </Grid>
          <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" checked/>}
            label="Click on save before proceeding" 
            onClick={shippingSubmit}
          />
        </Grid>
         
        </Grid>
      </form>
    </React.Fragment>
  );
}
