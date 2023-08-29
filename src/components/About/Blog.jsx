import React from "react";
import Metadata from "../../more/Metadata";
import Appbar from "../../components/Home/Appbar";
import Footer from "../../components/Home/Footer";
import logo from "../../utils/Images/Back/Cultimax.jpg";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { CardMedia, Container, Typography } from "@mui/material";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Blog = () => {
  return (
    <div>
      <Metadata title={"Blog"} />
      <Appbar />
      <Container
        maxWidth="lg"
        style={{
          backgroundColor: "#F9F9EF",
          borderRadius: "10px",
          padding: "0.5rem",
          marginTop: "0.6rem",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={12} md={6}>
              <Item>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <CardMedia
                    component={Box}
                    className="cardImage"
                    id="cardImage"
                    style={{
                      height: 250,
                      width: 400,
                      borderRadius: "10px",
                      margin: "1.8rem 0rem",
                    }}
                    image={logo}
                    title={"Cultimax"}
                  />
                </div>
              </Item>
            </Grid>
            <Grid xs={12} md={6}>
              <Item>
                <div style={{ padding: "1.2rem" }}>
                  <Typography
                    component="h4"
                    color="rgb(173, 156, 0)"
                    variant="h4"
                    style={{ fontFamily: "Ubuntu", textDecoration:"underline" }}
                  >
                    CULTIMAX
                  </Typography>
                  <Typography
                    component="p"
                    align="justify"
                    variant="p"
                    style={{ fontFamily: "Ubuntu", fontSize: "1rem" }}
                  >
                    The website serves as a distinctive and safe method for
                    carrying out Agri-marketing. With some basic online
                    navigational skills, farmers will be able to market their
                    goods across the nation through e-farming. This solution
                    enables customers to rapidly buy desired things by using
                    online payment while examining the many products that are
                    readily available.
                    <br />
                    Cultimax is concerned with the farmers benefit of getting
                    their products at the best price online.
                    <br />
                    So, the goal is to fill in any gaps in the agriculture
                    E-commerce business process.
                  </Typography>
                </div>
              </Item>
            </Grid>
            <Grid xs={12} md={12}>
              <Item>
                <Typography
                  component="p"
                  align="justify"
                  variant="p"
                  style={{ fontFamily: "Ubuntu", fontSize: "1rem" }}
                >
                  <div style={{ padding: "1.2rem" }}>
                    Our Cultimax has special Features like
                    <i style={{ fontSize: "1.1rem", color: "green" }}>
                      Disease Detection, Crop Prediction and Fertilizer
                      Recommendation,
                    </i>
                    these will help farmers to take decision on their crops for
                    better yield and profits.
                    <br />
                    Farmers and administrators are the primary users of this
                    website. Farmers will have their own interface where they
                    can perform tasks. By enabling various business models
                    including multi-suppliers, e-sales, and different kinds of
                    auctions, agricultural e-commerce creates favourable trading
                    opportunities. Today's e-commerce still relies heavily on
                    consumers' manual labour because it lacks completely
                    automated business processes. So, the goal of our project is
                    to fill in any gaps in the agriculture E-commerce business
                    process.
                    <br />
                    As farmers use our app they will save lot of time in
                    searching good products, we will list some featured products
                    which are highly rated by other farmers.
                    <br />
                    <i style={{ fontSize: "1.3rem", color: "rgb(37, 86, 97)",display:"flex", justifyContent:"center", fontFamily:"cursive" }}>
                    One stop Destination for all farming needs. --CultiMax
                    </i>
                  </div>
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Footer />
      </Container>
    </div>
  );
};

export default Blog;
