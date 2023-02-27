import "./App.css";
// import WebFont from "webfontloader";
import Home from "./components/Home/Home";
import ProductDetails from "./components/Products/ProductDetails";
import Loader from "./components/Loader/Loader";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import { loadUser } from "./actions/UserActions";
import { useEffect } from "react";
import Store from "./store";
import { useSelector } from "react-redux";
import UserData from "./components/User/UserData";
import NotFound from "./more/NotFound";
import UpdatePassword from "./components/User/UpdatePassword";
import ResetPassword from "./components/User/ResetPassword";
import ForgotPassword from "./components/User/ForgotPassword";
import UpdateUser from "./components/User/UpdateUser";
import ProductCategory from "./components/Products/ProductCategory";
import Favourites from "./components/User/Favourites";
import About from "./components/About/About";
import Blog from "./components/About/Blog";
import Products from "./components/Products/Products";
import Search from "./components/Products/Search";
import Cart from "./components/User/Cart";
import Checkout from "./components/Checkout/Checkout";
import PaymentForm from "./components/Checkout/PaymentForm";
import Success from "./components/Checkout/Success";
import MyOrder from "./components/User/MyOrder";
import Dashboard from "./components/Admin/Dashboard";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  // console.log(user && user.role);
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  var elem = isAuthenticated && user.role ==="admin";
 //<Route path = "/" element={elem&&elem ? <ComponentName /> : <NotFound/> } /> 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blog" element={<Blog />} />

          <Route path="/products" element={<Products />} />
          <Route path="/search" element={<Search/>} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products/key/:keyword" element={<Products />} />
          <Route path="/products/category/seeds" element={<Products category="seeds"/>} />
          <Route path="/products/category/tools" element={<Products category="tools"/>} />
          <Route path="/products/category/pesticides" element={<Products category="pesticides"/>} />
          <Route path="/products/category/irrigation" element={<Products category="irrigation"/>} />
          {/* <Route path="/products/category/irrigation" element={<ProductCategory category="irrigation"/>} /> */}

          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/favourites" element={isAuthenticated ? <Favourites/> : <Login/>}/>
          <Route path="/cart" element={isAuthenticated ? <Cart/> : <Login/>}/>
          <Route path="/checkout" element={isAuthenticated ? <Checkout/> : <Login/>}/>
          <Route path="/payment" element={isAuthenticated ? <PaymentForm/> : <Login/>}/>
          <Route path="/success" element={isAuthenticated ? <Success/> : <Login/>}/>
          <Route path="/orders/me" element={isAuthenticated ? <MyOrder/> : <Login/>}/>


          <Route path="/myprofile" element={isAuthenticated && <UserData user={user} />}/>
          <Route path="/myprofile/updatepassword" element={isAuthenticated && <UpdatePassword />}/>
          <Route path="/myprofile/updateuser" element={isAuthenticated && <UpdateUser />}/>
          <Route path="/myprofile/forgotpassword" element={<ForgotPassword />}/>
          <Route path="/password/reset/:token" element={<ResetPassword />}/>

          <Route path = "/admin/dashboard" element={elem&&elem ? <Dashboard /> : <NotFound/> } /> 

          <Route path="/Loader" element={<Loader />} />
          <Route path="/NotFound" element={<NotFound/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
