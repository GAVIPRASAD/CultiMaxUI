import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./ProductCard.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const options = {
    value: product && product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (

    <>
      {/* <div>
      {product && product.name}
      {product && product._id}
    </div> */}
      {/* maxWidth: 345 , height:333, width:280 */}
      <Link to={`/products/${product._id}`} style={{ textDecoration: "none" }}>
        <Card
          sx={{ maxWidth: 345, height: 350, width: 310 }}
          className="ProductCard"
          style={{
            borderRadius: "10px",
            border: "7px solid aliceBlue",
            boxShadow: "5px 5px 12px #73e600",
          }}
        >
          <CardMedia
            sx={{ height: 190 }}
            image={product && product.images[0].url}
            title={product && product.name}
          />
          <CardContent style={{ fontFamily: "Ubuntu", paddingBottom: "2px" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{ fontFamily: "Ubuntu" }}
            >
              {product && product.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ fontFamily: "Ubuntu" }}
            >
              {product && product.description}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ fontFamily: "Ubuntu" }}
            >
              <Rating
                // name="half-rating"
                // defaultValue={product && product.ratings}
                // size="small"
                // readOnly
                {...options}
              />
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="contained"
              color="success"
              style={{ fontFamily: "Ubuntu" }}
            >
              Buy Now
            </Button>
            <Button
              size="small"
              variant="contained"
              color="success"
              style={{ fontFamily: "Ubuntu" }}
            >
              Add To Cart
            </Button>
            <Button size="small" variant="contained" color="error">
              <FavoriteIcon />
            </Button>
          </CardActions>
        </Card>
      </Link>
    </>
  );
};

export default ProductCard;
