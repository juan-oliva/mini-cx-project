import React, { useState } from "react";

function FeedbackForm() {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://127.0.0.1:5000/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating, comment }),
    });
    setRating("");
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <input
        className="input"
        type="number"
        min="1"
        max="10"
        placeholder="Rating (1–10)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        required
      />
      <textarea
        className="textarea"
        placeholder="Your feedback"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
}

export default FeedbackForm;
