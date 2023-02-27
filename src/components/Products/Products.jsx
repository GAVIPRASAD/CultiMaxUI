import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Metadata from "../../more/Metadata";
import Appbar from "../Home/Appbar";
import { Container, Pagination, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProduct } from "../../actions/ProductActions";
import ProductCard from "./ProductCard";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import "./Products.css"
import Loader from "../Loader/Loader";
const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Products(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const category = props.category;
  // const category = props.category.toLowerCase();
 
  //pagintn and category
  const keyword = useParams().keyword;
  
  const [currentPage, setCurrentPage] = useState(1);
  const setCurrentPageNo = (event,value) => {
    // console.log(value);
    setCurrentPage(value);
  };


  const { products, loading, error, productsCount, resultPerPage } =
    useSelector((state) => state.products);
    // console.log( products.length, resultPerPage )


  React.useEffect(() => {
    // dispatch(getProduct());
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage,category));
  }, [dispatch, keyword, currentPage, category, alert, error]);


  // function refreshPage() {
  //   window.location.reload(false);
  // }

  return (
    <>
      <Metadata title={category ?(category).toUpperCase():"Products"} />
      {/* <CssBaseline style={{backgroundColor:"rgba(76, 139, 27, 0.956)"}}/> */}
      <Appbar />
      {loading ? <Loader/> :
      <>
      <Box
        style={{
          textAlign: "center",
          backgroundColor: "whitesmoke",
          fontSize: "2.2rem",
          borderRadius: "10px",
          margin: "0.5rem 0.5rem",
          padding: "0.4rem",
        }}
      >
        <Typography
          variant="h4"
          component="h4"
          style={{
            color: "hsl(54, 100%, 34%)",
            fontFamily: "Ubuntu",
            textTransform: "capitalize",
          }}
        >
          {/* {category} */}
          {category ?(category).toUpperCase():"Products"}
        </Typography>
      </Box>
      <Container
        maxWidth="xl"
        style={{
          //   backgroundColor: "#F9F9EF",
          borderRadius: "2px",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} style={{ padding: "0" }}>
              {/* <Item>xs=6 md=8</Item> */}
              <div
                className="gridContainer"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexGrow: "initial",
                  margin: "0.8rem",
                  marginLeft: "2.5rem",
                  // textAlign:"center"
                }}
              >
                {products.length == 0 ? (
                  <>
                    <Link to={"/"} style={{ textDecoration: "none" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          fontSize: "3.5rem",
                          color: "orange",
                          backgroundColor: "whitesmoke",
                          textAlign: "center",
                          padding: "20px",
                          borderRadius: "10px",
                        }}
                      >
                        404 NotFound
                        <br></br>
                        <span
                          style={{ color: "blueviolet", fontSize: "1.2rem" }}
                        >
                          click to go to home
                        </span>
                      </div>
                    </Link>
                  </>
                ) : (
                  <>
                    {products &&
                      products.map((product) => (
                        <div className="ProductCard" key={product._id}>
                          {/* { console.log(product.category)} */}

                          <ProductCard key={product._id} product={product} />
                        </div>
                      ))}
                  </>
                )}
              </div>
            </Grid>
          </Grid>
        </Box>
        <div style={{display:"flex", justifyContent:"center",  backgroundColor: "whitesmoke", padding:"10px", borderRadius:"10px"}}>
          <Typography
            variant="h4"
            component="h4"
            style={{
              color: "hsl(54, 100%, 34%)",
              fontFamily: "Ubuntu",
              textTransform: "capitalize",
            }}
          >
            <Pagination  color="success"
             count={Math.ceil(productsCount/8)}
             page={currentPage} 
             onChange={setCurrentPageNo}
            />
          </Typography>
        </div>
      </Container>
      </>
      }
    </>
  );
}
