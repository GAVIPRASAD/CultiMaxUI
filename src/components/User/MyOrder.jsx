import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, myOrders } from "../../actions/OrderAction";
import Metadata from "../../more/Metadata";
import Appbar from "../Home/Appbar";
import Badge from 'react-bootstrap/Badge';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "../../more/NotFound";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MyOrder = () => {
  const { loading, error, orders } = useSelector((state) => state.myOrder);

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    dispatch(myOrders());
  }, [dispatch, error]);

  return (
    <>
      <Appbar />
      <Box
        style={{
          textAlign: "center",
          backgroundColor: "whitesmoke",
          borderRadius: "10px",
          margin: "0.5rem 0.5rem",
          padding: "0.4rem",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} style={{ padding: "2rem" }}>
            <Metadata title={"MyOrders"} />
            <Grid item xs={12} md={8}>
              <Item style={{ fontSize: "1.2rem", border: "2px solid orange" }}>
                {orders &&
                  orders.map((item, index) => (
                    <>
                     
                      <Item
                        style={{
                          fontSize: "1.2rem",
                          border: "2px solid blue",
                          marginBottom: "1rem",
                        }}
                      >
                        <div key={index}>
                          {/* Product:ID :
                          <span style={{ color: "hsl(64, 100%, 6%)" }}>
                            {item._id}
                          </span>
                          <br /> */}
                          order-id:{" "}
                          <span style={{ color: "hsl(64, 100%, 6%)" }}>
                            {item.paymentInfo.id}
                          </span>
                          <br />
                          <div >
                            {item.orderItems &&
                              item.orderItems.map((order) => (
                                <div key={order._id} style={{borderBottom:"3px solid orange", borderTop:"3px solid orange",borderRadius:"10px", margin:"1.2rem"}}>
                                  Item-Name:{" "}
                                  <span style={{ color: "hsl(64, 100%, 6%)" }}>
                                    {order.name}
                                  </span>
                                  <br />
                                  Item-price:{" "}
                                  <span style={{ color: "hsl(64, 100%, 6%)" }}>
                                    {" "}
                                    ₹{order.price}{" "}
                                  </span>
                                  <br />
                                  Item-quantity:{" "}
                                  <span style={{ color: "hsl(64, 100%, 6%)" }}>
                                    {" "}
                                    {order.quantity}{" "}
                                  </span>
                                  <br />
                                </div>
                              ))}
                          </div>
                          Total-Price:
                          <Badge bg="danger">
                          <span style={{ color: "white", fontFamily:"cursive" }}>
                            {" "}
                            ₹{item.totalPrice}
                          </span>
                          </Badge>
                          <br />
                          Address:{" "}
                          <span style={{ color: "hsl(64, 100%, 6%)" }}>
                            {` ${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.state},
            ${item.shippingInfo.country}`}{" "}
                          </span>
                          <br />
                          <br />
                        </div>
                      </Item>
                      
                    </>
                  ))}
              </Item>
            </Grid>
          </Grid>
        </Box>
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
        //limit={2}
      />
    </>
  );
};

export default MyOrder;

// {orders &&
//   orders.map((item,index) =>
//    <div key={index}>
//       Product:ID : {item._id}<br/>
//       Address: {item.shippingInfo.address}<br/>

//       Item-Name: {item.orderItems[0].name}<br/>
//       Item-price:{item.orderItems[0].price}<br/>
//       Item-quantiy:{item.orderItems[0].quantity}<br/>

//       order-id: {item.paymentInfo.id}<br/>
//      payment -status:  {item.paymentInfo.status}<br/><br/>
//   </div>)}
