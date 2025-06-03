import React from "react";
import FeedbackForm from "./FeedbackForm";
import FeedbackList from "./FeedbackList";

function App() {
  return (
    <div className="app">
      <h1>Mini CX Feedback</h1>
      <FeedbackForm />
      <FeedbackList />
    </div>
  );
}

export default App;
