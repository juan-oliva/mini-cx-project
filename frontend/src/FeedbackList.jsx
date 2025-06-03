import React, { useEffect, useState } from "react";

function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API}/feedback`)
      .then((res) => res.json())
      .then((data) => setFeedbacks(data));
  }, []);

  return (
    <div>
      <h2>Submitted Feedback</h2>
      <ul className="feedback-list">
        {feedbacks.map((fb) => (
          <li key={fb.id} className="feedback-card">
            <span className="" rating>
              {fb.rating}/10:
            </span>{" "}
            <p>{fb.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeedbackList;
