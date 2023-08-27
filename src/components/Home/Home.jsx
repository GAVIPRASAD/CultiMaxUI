import React, { useEffect } from "react";
import "./Home.css";
import Appbar from "./Appbar";
import Slides from "./Slides";
import Footer from "./Footer";
import ProductCard from "../Products/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../actions/ProductActions";
import Metadata from "../../more/Metadata";
import Products from "../Products/Products";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import TouchAppIcon from '@mui/icons-material/TouchApp';
import Loader from "../Loader/Loader";
import SpecialFeatures from "./SpecialFeatures";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const dispatch = useDispatch();
  const { products, error,loading } = useSelector((state) => state.products);
  // {_id, name, description, price, ratings, images, category, stock, numOfReviews, createdAt, reviews, __v}
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <>
      <Appbar />
      <Slides />
      {/* mid page */}
      <div className="hrl" />
      {/* <Link to={"/products"} style={{textDecoration:"", color:"blue"}}>
      <h2 className="homeHeading" style={{ fontSize: "3.2rem",textDecoration:"none" , fontFamily:"cursive",}}>
        All Products
      </h2>
      </Link> */}
      <Link to={"/products"} style={{textDecoration:"none"}}>
      <h2 className="homeHeading" style={{ fontSize: "3.2rem",textDecoration:"none" }}>
        Categories
      </h2>
      </Link>
      <Container
        maxWidth="lg"
        style={{
          // backgroundColor: "orange",
          borderRadius: "10px",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          marginTop: "1.2rem",
          marginBottom: "2rem",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Item>
              
              <Button
                  className="hmbtn"
                  size="large"
                  variant="text"
                  color="warning" 
                >
                  <TouchAppIcon style={{
                    fontFamily: "Ubuntu",
                  fontSize: "2.3rem",
                  
                  rotate:"90deg"
                  }}/>
                </Button>
              <Link to={"/products/category/seeds"} className="linkto ">
                <Button
                  className="hmbtn"
                  size="large"
                  variant="text"
                  color="success"
                  style={{
                    fontFamily: "Ubuntu",
                    margin: "0rem 1rem",
                    fontSize: "1.3rem",
                  }}
                >
                  Seeds
                </Button>
                </Link>
                <Link to={"/products/category/tools"} className="linkto">
                  <Button
                    className="hmbtn"
                    size="large"
                    variant="text"
                    color="success"
                    style={{
                      fontFamily: "Ubuntu",
                      margin: "0rem 1rem",
                      marginRight: "0.7rem",
                      fontSize: "1.3rem",
                    }}
                  >
                    Tools
                  </Button>
                </Link>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>
                <Link to={"/products/category/irrigation"} className="linkto">
                  <Button
                    className="hmbtn"
                    size="large"
                    variant="text"
                    color="success"
                    style={{
                      fontFamily: "Ubuntu",
                      margin: "0rem 0.2rem",
                      fontSize: "1.3rem",
                    }}
                  >
                    Irrigation
                  </Button>
                </Link>

                <Link to={"/products/category/pesticides"} className="linkto">
                <Button
                  className="hmbtn"
                  size="large"
                  variant="text"
                  color="success"
                  style={{
                    fontFamily: "Ubuntu",
                    margin: "0rem 0rem",                  
                    fontSize: "1.3rem",
                  }}
                >
                  Pesticides
                </Button>
                </Link>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <h3 className="homeHeading" style={{ fontSize: "3.2rem",textDecoration:"none" }}>
        Special Features by CULTIMAX
      </h3>
      <SpecialFeatures/>

      {/* products */}
      <h2 className="homeHeading" style={{marginTop:"1.2rem"}}>Featured Products</h2>
      {loading ? <Loader/> :
      <>
      <div
        className="gridContainer"
        style={{ margin: "0.2rem", marginLeft: "2.5rem" }}
      >
        {products &&
          products.map((product) => (
            <div className="ProductCard" key={product._id}>
              <ProductCard key={product._id} product={product} />
            </div>
          ))}
        {/* <Products /> */}
      </div>
      </>
}

      {/* <Accordiandescription /> */}

      {/* Footer */}
      <Footer />

      <Metadata title={"CultiMax || Home"} />
    </>
  );
};

export default Home;
