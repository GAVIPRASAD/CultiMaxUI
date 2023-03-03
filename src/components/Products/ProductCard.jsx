import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import "./ProductCard.css";

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
          // sx={{ maxWidth: 270, height: 300, width: 270 }}
          // sx={{ maxWidth: 340, height: 290, width: 150 }}
          className="ProductCard"
          id="ProductCard"
          style={{
            maxWidth:340,
            height: 300, width: 270,
            borderRadius: "10px",
            border: "7px solid aliceBlue",
            boxShadow: "5px 5px 12px #73e600",
          }}
        >
          <CardMedia
          className="cardImage"
              id="cardImage"
            // sx={{ height: 120 , width:260}}
            style={{height: 150 , width:260}}
            image={product && product.images[0].url}
            title={product && product.name}
          />
          <CardContent style={{ fontFamily: "Ubuntu", paddingBottom: "2px" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{ fontFamily: "Ubuntu" , margin:"0"}}
            >
              {product && product.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ fontFamily: "Ubuntu" }}
            >
              {(product && product.description).toString().substring(0,28)}...
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ fontFamily: "Ubuntu", margin:"0" }}
            >
              <Rating
                // name="half-rating"
                // defaultValue={product && product.ratings}
                size="small"
                // readOnly
                {...options}
              />
            </Typography>
          <Badge bg="warning" text="dark">
        CultiMax Assured
      </Badge>
          </CardContent>
          {/* <CardActions>
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
          </CardActions> */}
        </Card>
      </Link>
    </>
  );
};

export default ProductCard;
