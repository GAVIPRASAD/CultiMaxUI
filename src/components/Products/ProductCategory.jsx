// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import Metadata from "../../more/Metadata";
// import Appbar from "../Home/Appbar";
// import { Container, Typography } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { getProduct } from "../../actions/ProductActions";
// import ProductCard from "./ProductCard";
// import { useNavigate } from "react-router-dom";
// import NotFound from "../../more/NotFound";
// import Loader from "../Loader/Loader";
// // import "../Home/Home.css";

// const Item = styled(Paper)(({ theme }) => ({
//   //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

// export default function ProductCategory(props) {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { products, error,loading } = useSelector((state) => state.products);
//   const category = props.category.toLowerCase();

//   // const keyword = "";
//   // let currentPage = 1;
 
//   // console.log(category);

//   // {_id, name, description, price, ratings, images, category, stock, numOfReviews, createdAt, reviews, __v}
//   React.useEffect(() => {
//     dispatch(getProduct(keyword, currentPage,category));
//     //  refreshPage()
//   }, [dispatch, error, category, keyword, currentPage]);

//   function refreshPage() {
//     window.location.reload(false);
//   }
//   return (
//     <>
//       <Metadata title={category} />
//       {/* <CssBaseline style={{backgroundColor:"rgba(76, 139, 27, 0.956)"}}/> */}
//       <Appbar />
//       {loading ? <Loader/> :
//         <>
//       <Box
//         style={{
//           textAlign: "center",
//           backgroundColor: "whitesmoke",
//           fontSize: "2.2rem",
//           borderRadius: "10px",
//           margin: "0.5rem 0.5rem",
//           padding: "0.4rem",
//         }}
//       >
       
//         <Typography
//           variant="h3"
//           component="h3"
//           style={{
//             color: "hsl(54, 100%, 34%)",
//             fontFamily: "Ubuntu",
//             textTransform: "capitalize",
//           }}
//         >
//           {category}
//         </Typography>
//       </Box>
//       <Container
//         maxWidth="xl"
//         style={{
//           //   backgroundColor: "#F9F9EF",
//           borderRadius: "2px",
//           paddingTop: "0.5rem",
//           paddingBottom: "0.5rem",
//         }}
//       >
//         <Box sx={{ flexGrow: 1 }}>
//           <Grid container spacing={2}>
//             <Grid item xs={6} md={12} style={{ padding: "0" }}>
//               {/* <Item>xs=6 md=8</Item> */}
//               <div
//                 className="gridContainer"
//                 style={{
//                   display: "flex",
//                   flexDirection: "row",
//                   flexGrow: "initial",
//                   margin: "0.8rem",
//                   marginLeft: "2.5rem",
//                 }}
//               >            
//                 {products &&
//                   products.map((product) => (
//                     <div className="ProductCard" key={product._id}>
//                       {/* { console.log(product.category)} */}
//                       <ProductCard key={product._id} product={product} />
//                     </div>
//                   ))}               
//               </div>
//             </Grid>
//           </Grid>
//         </Box>
//       </Container>
//     </>}
//     </>
//   );
// }


// // if query params doesnt work use conditional rendering called by category 
// // {products &&
// //   products.map((product) => (
// //     <div className="ProductCard" key={product._id}>
// //       {/* { console.log(product.category)} */}
// //       {product.category.toLowerCase() == category ? (
// //         <ProductCard key={product._id} product={product} />
// //       ) : (
// //         <></>
// //       )}
// //     </div>
// //   ))}
