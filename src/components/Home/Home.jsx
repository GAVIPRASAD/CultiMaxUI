import React, { useEffect } from "react";
import "./Home.css";
import Appbar from "./Appbar";
import Slides from "./Slides";
import Footer from "./Footer";
import ProductCard from "../Products/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../actions/ProductActions";

const Home = () => {
  const dispatch = useDispatch();
  const { products, error } = useSelector((state) => state.products);
  // {_id, name, description, price, ratings, images, category, stock, numOfReviews, createdAt, reviews, __v}
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <>
      <Appbar />
      <Slides />
      {/* mid page */}
      <div className="hrl" />
      <h2 className="homeHeading">Featured Products</h2>
      <div className="gridContainer">
        {products &&
          products.map((product) => (
            <div className="ProductCard" key={product._id}>
              <ProductCard key={product._id} product={product} />
            </div>
          ))}
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
