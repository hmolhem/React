import React from "react";
import ProductItem from "./../ProductItem/productItem";

const Products = ({data}) => {
return (
      <ul className="products">
      {data.map((item) => (
        <ProductItem data = {item}/>
      ))}
  </ul>
  )
};



export default Products