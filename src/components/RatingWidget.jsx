// components/RatingWidget.jsx
import React, { useState } from "react";

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = () => {
    if (rating > 0) {
      onRatingSubmit(productId, rating);
      setRating(0); // Reset after submission
    }
  };

  return (
    <div>
      <div style={styles.stars}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            onClick={() => setRating(star)}
            style={{
              cursor: "pointer",
              fontSize: "24px",
              color: star <= (hoveredRating || rating) ? "#FFD700" : "#ccc",
            }}
          >
            ★
          </span>
        ))}
      </div>
      <button style={styles.button} onClick={handleSubmit} disabled={rating === 0}>
        Submit Rating
      </button>
    </div>
  );
};

const styles = {
  stars: {
    margin: "10px 0",
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "8px",
  },
};

export default RatingWidget;
