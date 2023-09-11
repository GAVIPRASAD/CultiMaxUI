import React from "react";
import SpecialFeaturesCard from "./SpecialFeatures/SpecialFeatureCard";
import disease from "../../utils/Images/ml/disease.jpg";
import fertilizer from "../../utils/Images/ml/fertilizer.jpg";
import crop from "../../utils/Images/ml/crop.jpg";
const SpecialFeatures = () => {
    const products = 
        [
          {
            name: "Disease Detection",
            image: disease,
            link:"disease"
          },
          {
            name: "Crop Prediction",
            image: crop,
            link:"crop"
          },
          {
            name: "Fertilizer Recommendation",
            image: fertilizer,
            link:"fertilizer"
          },
        ]
    
  return (
    <>
    <div className="container" style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around"}}>
      {
      products &&
        products.map((product) => (
          <div className="ProductCard" key={product.name}>
            <SpecialFeaturesCard key={product.name} product={product} />
          </div>
        ))}
        </div>

    </>
  );
};

export default SpecialFeatures;
