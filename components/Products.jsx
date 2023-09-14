"use client";
import React from "react";

const Products = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  console.log("Products Data", products);
  return (
    <div>
      <h2>Products</h2>
      {products.map((item) => (
        <li key={item.id}>{item.title} </li>
      ))}
    </div>
  );
};

export default Products;
