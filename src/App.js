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
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/myprofile" element={isAuthenticated && <UserData user={user} />}/>
          <Route path="/myprofile/updatepassword" element={isAuthenticated && <UpdatePassword />}/>
          <Route path="/myprofile/updateuser" element={isAuthenticated && <UpdateUser />}/>
          <Route path="/myprofile/forgotpassword" element={<ForgotPassword />}/>
          <Route path="/password/reset/:token" element={<ResetPassword />}/>
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Loader" element={<Loader />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
