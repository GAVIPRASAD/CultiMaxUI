import React from "react";
import { Link } from "react-router-dom";
import Metadata from "../../more/Metadata";
import Appbar from "../../components/Home/Appbar";
import Footer from "../../components/Home/Footer";

const About = () => {
  return (
    <div>
    <Metadata title={"About"}/>
      <Appbar />
      <Link to={"/"} style={{textDecoration:"none"}}>
        <div style={{ fontSize: "3.5rem", color:"orange", backgroundColor:"whitesmoke", textAlign:"center" }}>Contact
        <br></br>
        <span style={{color:"blueviolet", fontSize:"1.2rem"}}>click to go to home</span>
        </div>
      </Link>
      <Footer/>
    </div>
  );
};

export default About;
