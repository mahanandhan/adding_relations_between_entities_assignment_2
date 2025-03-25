// components/ProductCard.jsx
import React from "react";
import RatingWidget from "./RatingWidget";

const ProductCard = ({ product, onRatingSubmit }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>Average Rating:</strong> {product.avgRating.toFixed(1)} ⭐ ({product.totalRatings} ratings)</p>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
};

const styles = {
  card: {
    width: "300px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
  },
};

export default ProductCard;
