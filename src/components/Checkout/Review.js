import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import Metadata from '../../more/Metadata';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';



export default function Review() {
  
  const { user } = useSelector((state) => state.user);
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
    
    let productPrice =  cartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );

    const subtotal = productPrice 
      // eslint-disable-next-line
    const shippingCharges = productPrice > 300 ? 0 : 30;
    
    const totalPrice = subtotal + shippingCharges;
  
    const address = `${shippingInfo.address}, ${shippingInfo.state}, ${shippingInfo.country}`;

    
  
    const proceedToPayment = () => {
      const data = {
        subtotal,
        shippingCharges,
        totalPrice,
      };
      // alert("Hello")
      sessionStorage.setItem("orderInfo", JSON.stringify(data));
  
    };
    
    React.useEffect(() => {
      proceedToPayment();
      // alert("Payment")
    }, [])
  return (
    <React.Fragment>
      <Metadata title="Confirm Order" />
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <Typography variant="p" style={{color:'orangered'}} gutterBottom>
        Make sure that you have items in cart that you want to buy
      </Typography>
      <List disablePadding>
      <div className="confirmCartItemsContainer">
             {cartItems.map((item) => (
               <div key={item.product}>
                 <img src={item.image} alt="Product"  style={{height:"100px" ,width:"100px", marginRight:'1.2rem', marginBottom:"1.2rem"}}/>
                 <Link to={`/product/${item.product}`} style={{textDecoration:"none"}}>
                  <span style={{fontFamily:"Ubuntu", color:"orange", fontSize:"1.2rem"}}>
                   {item.name}
                  </span>
                 </Link>{" "}
                 <span style={{marginLeft:"1.2rem"}}>
                   {item.quantity} X ₹{item.price} ={" "}
                   <b>₹{item.price * item.quantity}</b>
                 </span>
                 <br />
                 <span style={{marginLeft:"0rem"}}>
                      {`Shipping Charges = `} 
                   <b>₹{shippingCharges}</b>
                 </span>
               </div>
             ))
              }
           </div>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          ₹{totalPrice}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{user.name}</Typography>
          <Typography gutterBottom>{address}</Typography>
          <Typography gutterBottom>{shippingInfo.phoneNo}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }} style={{fontSize:"0.9rem", fontFamily:"Ubuntu", color:"grey"}}>
            {/* Payment details */}
            Before Clicking next click confirm for avoiding chances of missing the product<br />
            <span
            size='large'
            color='warning'
            variant='contained'
            onClick={proceedToPayment}
            style={{cursor:"pointer", color:"orange", fontSize:"1.3rem",borderBottom:"2px solid orange", borderRadius:"8px"}}
            >
              Confirm Info 
            </span>
          </Typography>
          <Grid container>
            {/* {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom></Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))} */}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}