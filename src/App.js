import "./App.css";
// import WebFont from "webfontloader";
import Home from "./components/Home/Home";
import ProductDetails from "./components/Products/ProductDetails";
import Loader from './components/Loader/Loader';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Loader" element={<Loader />} />
        <Route path="*" element={<div>Not Found</div>} />        
      </Routes>
    </BrowserRouter>
      {/* <Loader/> */}
      {/* <Home /> */}
      {/* <ProductDetails/> */}
    </>
  );
}

export default App;
