import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Cultimax from "../../utils/Images/Back/Cultimax.jpg"
import "./Home.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

function Appbar({product}) {
  return (
    <Navbar collapseOnSelect expand="lg"  variant="dark" className="nav navv" sticky="top" style={{padding:"0px"}}>
      <Container>
      <Tooltip title="CultiMax" >
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
            <Nav className="navli"><i>Home</i></Nav>
            </Link>

            <Link to={"/"} className="linkto">
            <Nav className="navli"><i>Blog</i></Nav>
            </Link>

            <NavDropdown title="Products" id="collasible-nav-dropdown" style={{fontFamily:"Ubuntu"}}>

            <Link to={"/"} className="linkto">
              <NavDropdown.Item href="">Seeds</NavDropdown.Item>
            </Link>

            <Link to={"/"} className="linkto">
              <NavDropdown.Item href="">
                Tools
              </NavDropdown.Item>
            </Link>

            <Link to={"/"} className="linkto">
              <NavDropdown.Item href="">Pesticides</NavDropdown.Item>
            </Link>

            <Link to={"/"} className="linkto">
              <NavDropdown.Item href="">Irrigation</NavDropdown.Item>
            </Link>
              <NavDropdown.Divider />
            </NavDropdown>
            <Link to={"/"} className="linkto">             
            <Nav className="navli"><i>Contact</i></Nav>
            </Link>
          </Nav>
          <Nav className="nav">
            <div className="icons">
            <Link to={"/"} className="linkto">
            <i>
            <Tooltip title="Favourites" >
            <FavoriteIcon />
            </Tooltip>
            </i>
            </Link>
            <Link to={"/"} className="linkto">
            <i>
            <Tooltip title="Search" >
            <SearchIcon />             
            </Tooltip>
            </i>
            </Link>

            <Link to={"/"} className="linkto"> 
            <i>
            <Tooltip title="Cart" >
            <ShoppingCartIcon />
            </Tooltip>
            </i>
            </Link>

            <Link to={"/Login"} className="linkto"> 
            <i>
            <Tooltip title="Login" >
            <LoginIcon />
            </Tooltip>
            </i>
            </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appbar;
