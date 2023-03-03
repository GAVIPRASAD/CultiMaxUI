import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Cultimax from "../../utils/Images/Back/Cultimax.jpg";
import "./Home.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import { Avatar, Badge, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LogoutOutlined } from "@mui/icons-material";
import { deepOrange } from "@mui/material/colors";
import ProductCategory from "../Products/ProductCategory";
import { useState } from "react";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

function Appbar({ product }) {
  const { isAuthenticated } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  const { favouriteItems } = useSelector((state) => state.favourite);
 
  // console.log(isAuthenticated)
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="nav navv"
      sticky="top"
      style={{ padding: "0px" }}
    >
      <Container>
        <Tooltip title="CultiMax">
          <Navbar.Brand href="">
            <Link to={"/"} className="linkto">
              <img src={Cultimax} alt="Farm-in" className="logo" />
            </Link>
          </Navbar.Brand>
        </Tooltip>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Link to={"/"} className="linkto">
              <Nav className="navli">
                <i>Home</i>
              </Nav>
            </Link>

            <Link to={"/blog"} className="linkto">
              <Nav className="navli">
                <i>Blog</i>
              </Nav>
            </Link>

            {/* dropdown  */}
             {/* <Link to={"/products/category/seeds"} className="linkto close">
             <Nav className="navli">
                <i>Seeds</i>
              </Nav>
              </Link>

              <Link to={"/products/category/tools"} className="linkto">
              <Nav className="navli">
                <i>Tools</i>
              </Nav>
              </Link>


              <Link to={"/products/category/irrigation"} className="linkto">
              <Nav className="navli">
                <i>Irrigation</i>
              </Nav>
              </Link>

              <Link to={"/products/category/pesticides"} className="linkto">
              <Nav className="navli">
                <i>Pesticides</i>
              </Nav>
              </Link> */}
           {/* dropdown close  */}

            <NavDropdown
              title="Products"
              id="collasible-nav-dropdown"
              style={{ fontFamily: "Ubuntu" }}
             autoClose
            >
              <NavDropdown.Item >
              <Link to={"/products/category/seeds"} className="linkto ">
                <div className="categ" style={{margin:"0.3rem 1.2rem",fontSize:"1.1rem" ,color:"black"}}>Seeds</div>
              </Link>
              </NavDropdown.Item>

              <NavDropdown.Item >
              <Link to={"/products/category/tools"} className="linkto">
                <div className="categ" style={{margin:"0.3rem 1.2rem",fontSize:"1.1rem" ,color:"black"}}>Tools</div>
              </Link>
              </NavDropdown.Item>

              <NavDropdown.Item >
              <Link to={"/products/category/irrigation"} className="linkto">
                <div className="categ" style={{margin:"0.3rem 1.2rem",fontSize:"1.1rem" ,color:"black"}}>Irrigation</div>
              </Link>
              </NavDropdown.Item>

              <NavDropdown.Item >
              <Link to={"/products/category/pesticides"} className="linkto">
                <div className="categ" style={{margin:"0.3rem 1.2rem",fontSize:"1.1rem" ,color:"black"}}>Pesticides</div>
              </Link>
              </NavDropdown.Item>
              
              <NavDropdown.Divider />
            </NavDropdown>
            <Link to={"/about"} className="linkto">
              <Nav className="navli">
                <i>About</i>
              </Nav>
            </Link>
          </Nav>
          <Nav className="nav">
            <div className="icons">
            <Link to={"/search"} className="linkto">
                <i>
                  <Tooltip title="Search">
                    <SearchIcon />
                  </Tooltip>
                </i>
              </Link>
              <Link to={"/favourites"} className="linkto">
                <i>
                <Badge badgeContent={favouriteItems.length} color="warning">
                  <Tooltip title="Favourites">
                    <FavoriteIcon />
                  </Tooltip>
                  </Badge>
                </i>
              </Link>
            

              <Link to={"/cart"} className="linkto">
                <i>
                <Badge badgeContent={cartItems.length} color="warning">
                  <Tooltip title="Cart">
                    <ShoppingCartIcon />
                  </Tooltip>
                  </Badge>
                </i>
              </Link>

              <Link to={"/Login"} className="linkto">
                <i style={{marginRight:"0rem"}}>
                  <Tooltip title={isAuthenticated ? "Logout" : "Login"}>
                    {isAuthenticated ? (
                      // <LogoutOutlined />
                      <></>
                    ) : (
                      <LoginIcon />
                    )}
                  </Tooltip>
                </i>
              </Link>
              {
                isAuthenticated ?
              
              <Link to={"/myprofile"} className="linkto">
                <Avatar
                  sx={{ bgcolor: deepOrange[500], width: 34, height: 37 }}
                ></Avatar>
              </Link>
              : <></>}

            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appbar;
