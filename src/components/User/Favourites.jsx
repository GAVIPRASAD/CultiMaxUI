import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Appbar from "../Home/Appbar";
import FavouriteCard from "./FavouriteCard";
import { useDispatch, useSelector } from "react-redux";
import Login from "../Login/Login";
import { deleteFavouriteItemsToCart } from "../../actions/FavouriteAction";
import Metadata from "../../more/Metadata";
import Loader from "../Loader/Loader";
import NotFound from "../../more/NotFound";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Favourites() {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.productDetails);
  const { favouriteItems } = useSelector((state) => state.favourite);
  // console.log(favouriteItems)
 

  const deleteFavouriteItems = (id) => {
    dispatch(deleteFavouriteItemsToCart(id));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {favouriteItems.length === 0 ? (
            <NotFound error="Add To Favourites To See Here" />
          ) : (
            <>
              <Metadata title="Favorites" />
              <Appbar />
              <Grid item xs={12} md={8}>
                <Item>
                  <Typography
                    variant="h4"
                    component="h4"
                    style={{
                      color: "hsl(54, 100%, 34%)",
                      fontFamily: "Ubuntu",
                    }}
                  >
                    Favourites 😍
                  </Typography>
                </Item>
              </Grid>
              <Container
                maxWidth="lg"
                style={{
                  height: "85vh",
                  //   backgroundColor: "#F9F9EF",
                  borderRadius: "10px",
                  paddingTop: "0.5rem",
                }}
              >
                <Box sx={{ flexGrow: 1 }} maxwidth="lg">
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                      <Item>
                        {favouriteItems &&
                          favouriteItems.map((item) => (
                            <div
                              key={item.product}
                            >
                              <FavouriteCard
                                item={item}
                                deleteFavouriteItems={deleteFavouriteItems}
                              />
                            </div>
                          ))}
                      </Item>
                    </Grid>
                  </Grid>
                </Box>
              </Container>
            </>
          )}
        </>
      )}
    </>
  );
}
