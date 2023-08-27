import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import "./SpecialFeatureCard.css";

const SpecialFeatureCard = ({ product }) => {
  return (
    <>
      <Link to={`/${product&&product.link}`} style={{ textDecoration: "none" }}>
        <Card
          // sx={{ maxWidth: 270, height: 300, width: 270 }}
          // sx={{ maxWidth: 340, height: 290, width: 150 }}
          className="SpecialFeaturesCardd"
          id="SpecialFeaturesCard"
          style={{
            maxWidth: 340,
            height: 300,
            width: 430,
            borderRadius: "10px",
            border: "7px solid aliceBlue",
            boxShadow: "5px 5px 12px #73e600",
            // margin:"1.2rem",
            marginLeft:"1.4rem",
            marginRight:"1.2rem"
          }}
        >
          <Badge bg="warning" text="dark" style={{marginLeft:"1rem"}}>
          </Badge>
          <CardMedia
            className="cardImage"
            id="cardImage"
            // sx={{ height: 120 , width:160}}
            style={{ height: 220, width: 310, marginTop:"0.6rem", marginLeft:"0.8rem", borderRadius:"9px" }}
            image={product && product.image}
            title={product && product.name}
          />
          <CardContent style={{ fontFamily: "Ubuntu", paddingBottom: "2px" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{ fontFamily: "Ubuntu", margin: "0" , display:"flex", justifyContent:"center"}}
            >
              {product && product.name}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};

export default SpecialFeatureCard;
