import { Button, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Metadata from '../../more/Metadata';
import Appbar from '../Home/Appbar';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from 'react';

const Success = () => {
  const navigate = useNavigate();
  useEffect(() => {
    toast("Your Order Placed Sucessfully");
  }, [])
  
  return (
    <React.Fragment>
      <Metadata title="Order Succes"/>
      <Appbar/>
       <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
    <Typography variant="h5" gutterBottom>
      Thank you for your order.
    </Typography>
    <Typography variant="subtitle1" style={{marginBottom:"15rem"}}>
      {/* Your order number is #2001539. */}
       We have emailed your order
      confirmation, and will send you an update when your order has
      shipped.

    </Typography>
 
    <Button
        variant="contained"
        onClick={()=> navigate("/")}
        color="warning"
        sx={{ mt: 3, ml: 1 }}
      >
       Home
      </Button>
      </Paper>
      </Container>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={1}
      />
  </React.Fragment>
  )
}

export default Success