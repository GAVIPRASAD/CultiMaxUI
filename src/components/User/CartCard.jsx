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

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  // color: theme.palette.text.secondary,
}));

export default function CartCard({item, deleteCartItems}) {

  return (
    <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Item style={{display:"flex"}} >
            <img src={item.image} alt="IMG" height={60}  width={90} />
            <Link to={`/product/${item.product}`} style={{textDecoration:"none", marginTop:"0.5rem"}}>
            <span style={{margin:"0.5rem 0.4rem", fontSize:"1.4rem", color:"rgb(213, 156, 0)"}}>
              <span style={{color:"rgb(113, 140, 0)"}}>
              Name:  {` `}
                </span> {item.name}
              </span>
            </Link>
            <span style={{margin:"0.5rem 0.4rem", fontSize:"1.4rem", color:"rgb(213, 156, 0)"}}>
              <span style={{color:"rgb(113, 140, 0)"}}>
              Price: {` `}
                </span> {item.price}
              </span>                   
            <DeleteIcon className="delicon" style={{marginTop:"1.0rem",marginLeft:"2.9rem", color:"orange", cursor:"pointer"}} 
            onClick={() => deleteCartItems(item.product)}/>
          </Item>
        </Grid>
        
      </Grid>
    </Box>
  );
}