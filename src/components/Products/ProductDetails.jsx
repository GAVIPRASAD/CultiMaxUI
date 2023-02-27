import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Appbar from "../Home/Appbar";
import Footer from "../Home/Footer";
import Carousel from "react-bootstrap/Carousel";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import img1 from "../../utils/Images/Tools/sprayer/sprayer3.jpg";
import {
  Button,
  ButtonGroup,
  Input,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import "./ProductDetails.css";
import ReviewCard from "./ReviewCard";
import Metadata from "../../more/Metadata";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearErrors, getProductDetails, newReview } from "../../actions/ProductActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { fontSize } from "@mui/system";
import Loader from "../Loader/Loader";
import { addFavouriteItemsToCart } from "../../actions/FavouriteAction";
import { addItemsToCart } from "../../actions/CartAction";
import { NEW_REVIEW_RESET } from "../../constans/ProductConstans";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "",
  color: theme.palette.text.secondary,
}));

const ProductDetails = () => {
  // console.log(match&&match.params.id);
  // let id = match&&match.params.id;

  // const [value, setvalue] = useState(2);
  const navigate = useNavigate();

  let id = useParams().id;
  const dispatch = useDispatch();

  
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  const { isAuthenticated } = useSelector((state) => state.user);

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  function refreshPage() {
    window.location.reload(false);
  }

  const submitReview = (e)=>{
    e.preventDefault();

    // const data = new FormData(e.currentTarget);
    const myForm = {
      rating: Number(rating),
      comment: comment,
      id: id,
    }

    {
      isAuthenticated !== true ? navigate(`/login`) : <></>;
    }
    
    dispatch(newReview(myForm));
    toast("Review added successfully");
    refreshPage()
   

    {
      comment.length === 0
        ? toast.error("Please fill the comment box") :<></>
        // : toast.success("Review done successfully reload for watch it");
    }
    // dispatch({ type: NEW_REVIEW_RESET });

  }

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProductDetails(id));
  }, [dispatch, id, error]);



  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  // useEffect(() => {
  //   setvalue(product.ratings);
  // }, [product]);

  // let img = product.images&&product.images[0];
  // console.log(img&&img.url)

  // let rev = product.reviews&&product.reviews[0];
  // console.log(rev&&rev[0])

  // console.log(product.reviews && product.reviews);

  // Increase quantity
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (product.Stock <= quantity) return;
    // if (product.Stock <= quantity) return toast.error("Product stock limited");
    const qty = quantity + 1;
    if (qty > 9) {
      return toast("You Can Only order 9 items in an order");
    }
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;
    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    if (product.stock > 0) {
      dispatch(addItemsToCart(id, quantity));
      navigate("/cart")
      toast.success("Product Added to cart");
    } else {
      toast.error("Product stock limited");
    }
  };

  const addToFavouriteHandler = () => {
    if (dispatch(addFavouriteItemsToCart(id, quantity))) {
      toast.success("Product Added to Favourites");
    }
  };

  return (
    <>
      <Metadata title={`${product.name}`} />
      {/* <CssBaseline style={{backgroundColor:"rgba(76, 139, 27, 0.956)"}}/> */}
      <Appbar />
      {/* extra for getting scroll up  */}
      {loading ? (
        <Loader />
      ) : (
        <>
          <Input
            id="margin-none"
            autoFocus
            size="small"
            style={{ fontSize: "0rem" }}
          />
          {/* extra over  */}
          <Container
            maxWidth="lg"
            style={{
              backgroundColor: "#F9F9EF",
              borderRadius: "10px",
              paddingTop: "0.5rem",
            }}
          >
            <Box sx={{ flexGrow: 1 }} style={{ marginTop: "1.2rem" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={8} lg={6} autoFocus>
                  <Item style={{ borderRadius: "10px" }}>
                    <Carousel>
                      {/* <img className="d-block w-100" src={img&&img.url} alt="Products" /> 
                    // let img = product.images&&product.images[0];*/}
                      {product.images &&
                        product.images.map((item, i) => (
                          <Carousel.Item key={i}>
                            <img
                              style={{
                                height: "50vh",
                                width: "auto",
                                padding: "0.2rem",
                                borderRadius: "10px",
                              }}
                              className="CarouselImage"
                              key={i}
                              src={item.url}
                              alt={`${i} Slide`}
                            />
                            <Carousel.Caption>
                              <h3> </h3>
                              <p> </p>
                            </Carousel.Caption>
                          </Carousel.Item>
                        ))}
                    </Carousel>
                  </Item>
                </Grid>

                <Grid item xs={12} md={4} lg={6}>
                  <Item style={{ borderRadius: "10px" }}>
                    {/* title  */}
                    <Typography
                      variant="h4"
                      component="h6"
                      ml={5}
                      style={{
                        fontFamily: "Ubuntu",
                        fontWeight: "initial",
                        fontSize: "2.3rem",
                        color: "hsl(64, 100%, 6%)",
                      }}
                    >
                      {/* Sprayer Axpfty */}
                      {product && product.name}
                    </Typography>

                    {/* Ratings  */}
                    <Typography
                      variant="h5"
                      component="h6"
                      ml={5}
                      mt={1}
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <Rating {...options}  />
                      <span style={{ fontSize: "1.2rem" }}>
                        {product.numOfReviews} Reviews
                      </span>
                    </Typography>

                    {/* Description  */}
                    <Typography
                      variant="p"
                      component="p"
                      ml={5}
                      mr={3}
                      mt={1}
                      className="desc"
                      style={{
                        display: "flex",
                        color: "hsl(64, 100%, 6%)",
                        fontFamily: "Catamaran",
                        fontWeight: "normal",
                        fontSize: "1.2rem",
                        alignContent: "center",
                        justifyContent: "center",
                      }}
                    >
                      {product.description}
                    </Typography>

                    {/* Price  */}
                    <Typography
                      variant="h5"
                      component="h6"
                      ml={5}
                      style={{
                        fontFamily: "Ubuntu",
                        fontWeight: "initial",
                        fontSize: "1.9rem",
                        color: "#788000",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      RS. {product.price}/-
                      <span style={{ fontSize: "1.2rem" }}>Offer Price</span>
                    </Typography>

                    <Stack direction="row" spacing={2} m={2} ml={5}>
                      <Link to={"/checkout"} style={{textDecoration:"none"}}>
                        <Button
                          size="small"
                          variant="contained"
                          color="success"
                          style={{ fontFamily: "Ubuntu" }}
                          onClick={addToCartHandler}
                        >
                          Buy Now
                        </Button>
                      </Link>
                      <Button
                        size="small"
                        variant="contained"
                        color="success"
                        style={{ fontFamily: "Ubuntu" }}
                        onClick={addToCartHandler}
                      >
                        Add To Cart
                      </Button>
                      <Button
                        size="small"
                        variant="contained"
                        color="warning"
                        className="btn1"
                        onClick={addToFavouriteHandler}
                      >
                        <FavoriteIcon />
                      </Button>
                    </Stack>

                    {/* Quantity  */}
                    <Box
                      ml={4}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        // alignItems: "center",
                        "& > *": {
                          m: 1,
                        },
                      }}
                    >
                      <ButtonGroup
                        variant="text"
                        aria-label="text button group"
                      >
                        <Button
                          className="btng"
                          style={{ fontSize: "1.5rem" }}
                          onClick={decreaseQuantity}
                        >
                          -
                        </Button>
                        <Button
                          className="btng"
                          style={{ fontSize: "1rem", color: "orange" }}
                          readOnly
                        >
                          {quantity}
                        </Button>
                        <Button
                          className="btng"
                          style={{ fontSize: "1.5rem" }}
                          onClick={increaseQuantity}
                        >
                          +
                        </Button>
                      </ButtonGroup>
                      <span style={{ fontSize: "1.2rem", marginTop: "1.2rem" }}>
                        <b>{product.Stock < 1 ? "OutOfStock" : "InStock"}</b>
                      </span>
                    </Box>
                  </Item>
                </Grid>

                <Grid item xs={12} md={12} lg={12}>
                  <Item style={{ borderRadius: "10px" }}>
                    <Typography
                      variant="h5"
                      component="h6"
                      ml={5}
                      style={{
                        fontFamily: "Ubuntu",
                        fontWeight: "initial",
                        fontSize: "1.8rem",
                        color: "hsl(64, 100%, 6%)",
                        textDecoration: "underline",
                        textDecorationColor: "orange",
                      }}
                    >
                      Reviews
                      <br />
                      <span style={{ fontSize: "1.1rem", marginTop: "0.8rem" }}>
                        Add a review:
                      </span>
                      <br />
                    </Typography>
                    <Box ml={5} mt={2}>
                      <Rating
                        onChange={(e) => setRating(e.target.value)}
                        value={rating}
                        style={{
                          backgroundColor: "  rgb(235, 255, 173)",
                          borderBottom: "5px solid ",
                          borderRadius: " 10px",
                          padding: "0.2rem",
                        }}
                      />
                      <TextField
                        fullWidth
                        label="Enter Your Review"
                        id="fullWidth"
                        multiline
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        style={{
                          marginTop: "0.5rem",
                          backgroundColor: "  rgb(235, 255, 173)",
                          borderRadius: "8px",
                          borderBottom: "5px solid ",
                          borderBottomColor: "orange",
                        }}
                      />
                      <Button
                        variant="contained"
                        color="success"
                        style={{ marginTop: "0.8rem" }}
                        onClick={submitReview}
                      >
                        Submit
                      </Button>
                    </Box>
                  </Item>
                </Grid>

                <Grid item xs={12} md={12} lg={12}>
                  <Item style={{ borderRadius: "10px" }}>
                    <Typography
                      variant="h5"
                      component="h6"
                      ml={5}
                      style={{
                        fontFamily: "Ubuntu",
                        fontWeight: "initial",
                        fontSize: "1.8rem",
                        color: "hsl(64, 100%, 6%)",
                        // textDecoration: "underline",
                        textDecorationColor: "orange",
                      }}
                    >
                      User Reviews
                      <br />
                      {product.reviews && product.reviews[0] ? (
                        <div key={product._id}>
                          {product.reviews &&
                            product.reviews.map((review) => (
                              <ReviewCard review={review} key={review._id} />
                            ))}
                        </div>
                      ) : (
                        <p
                          className="noReviews"
                          style={{
                            fontFamily: "Poppins,sans-serif",
                            fontSize: "1.2rem",
                          }}
                        >
                          No Reviews Yet - Your the first one to review, Enter
                          Your Experience
                        </p>
                      )}
                      <br />
                    </Typography>
                  </Item>
                </Grid>

                <Grid item xs={12} md={12} lg={12}>
                  <Item style={{ borderRadius: "10px" }}> </Item>
                </Grid>
              </Grid>
            </Box>
          </Container>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            limit={1}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Footer />
        </>
      )}
    </>
  );
};

export default ProductDetails;
