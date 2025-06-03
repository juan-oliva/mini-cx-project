import React, { useEffect, useState } from "react";

function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/feedback")
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
