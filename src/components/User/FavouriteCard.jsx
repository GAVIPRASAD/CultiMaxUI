import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import bg1 from "../../utils/Images/Back/bg1.jpg";
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { addItemsToCart } from '../../actions/CartAction';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  // color: theme.palette.text.secondary,
}));

export default function FavouriteCard({item, deleteFavouriteItems}) {
  // console.log(item)
  const dispatch = useDispatch();
  const { product} = useSelector(
      (state) => state.productDetails
    );
    const cartHandler =()=>{
      dispatch(addItemsToCart(id, quantity));
      toast.success("Added To Cart Successfully")
      
    }
    const id = item.product.substring(0,25);
    const quantity = 1;
  return (
    <Box sx={{ flexGrow: 1 }} style={{margin:'1.2rem', borderBottom:'4px solid orange', padding:"0.8rem", borderRadius:"10px"}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Item style={{display:"flex"}}>
            <img src={item.image} alt="IMG" height={60}  width={90} />
            <Link to={`/product/${item.product}`} style={{textDecoration:"none", marginTop:"0.5rem"}}>
            <span style={{margin:"0.5rem 0.4rem", fontSize:"1.4rem", color:"rgb(213, 156, 0)"}}>
              <span style={{color:"rgb(113, 140, 0)"}}>
              Name: {` `}
                </span> 
              {item.name}</span>
            </Link>

            <span style={{margin:"0.5rem 0.5rem", fontSize:"1.4rem", color:"rgb(213, 156, 0)"}}>
              <span style={{color:"rgb(113, 140, 0)"}}>
              Price: {` `}
                </span> 
                 ₹{item.price}</span>
            {/* <span style={{margin:"0.5rem 1.2rem", fontSize:"1.6rem", color:"rgb(173, 156, 0)"}}>Remove</span> */}
            
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item style={{display:'flex'}} >
            <span style={{margin:"0.8rem 0.4rem", fontSize:"1.1rem", color:"orange"}} >
              {product.stock < 1 ? "OUT OF STOCK" : "InStock" }
            </span>

            <Button style={{margin:"0.5rem 0.2rem", fontSize:"1.1rem", color:"rgb(173, 156, 0)"}}
            onClick={cartHandler}><AddShoppingCartIcon/></Button>

            <Button style={{margin:"0.5rem 0.2rem", fontSize:"1.1rem", color:"rgb(173, 156, 0)"}}
            onClick={() => deleteFavouriteItems(item.product)} ><DeleteIcon/></Button>
          </Item>
        </Grid>
        <ToastContainer
        position="top-center"
        autoClose={2000}
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
        {/* <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid> */}
      </Grid>
    </Box>
  );
}