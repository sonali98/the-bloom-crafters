import React from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const products = [
    {
      image: "/path/to/image1.jpg",
      title: "Flower Jewelry Set",
      description: "Beautiful real flower jewelry for weddings.",
      price: 2000,
    },
    // Add more products here
  ];

  return (
    <div>
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
};

export default Products;
