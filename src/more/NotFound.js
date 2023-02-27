import React from "react";
import { Link } from "react-router-dom";
import Appbar from "../components/Home/Appbar";
import Footer from "../components/Home/Footer";
import Metadata from "./Metadata";

const NotFound = (props) => {
  return (
    <div>
      <Metadata title="Not Found"/>
      <Appbar />
      <Link to={"/"} style={{textDecoration:"none"}}>
        <div style={{ fontSize: "3.5rem", color:"orange", backgroundColor:"whitesmoke", textAlign:"center" }}>404 NotFound
        <br></br>
        <span style={{color:"blueviolet", fontSize:"1.2rem"}}>{props.error}</span>
        <br></br>
        <span style={{color:"blueviolet", fontSize:"1.2rem"}}>click to go to home</span>
        </div>
        
      </Link>
      <Footer/>
    </div>
  );
};

export default NotFound;
