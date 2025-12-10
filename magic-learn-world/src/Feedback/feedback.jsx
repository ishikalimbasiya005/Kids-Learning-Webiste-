import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../Css/feedback.css";
const FeedbackAdmin = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get("http://localhost:5000/feedback")
      .then((res) => setFeedbacks(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      try {
        await axios.delete(`http://localhost:5000/feedback/${id}`);
        setFeedbacks(feedbacks.filter((f) => f._id !== id)); // UI se remove
      } catch (err) {
        console.error("Error deleting feedback:", err);
      }
    }
  };

  return (
    <div className="feedback-outer">
      <div className="container">
        <div className="feedback-inner">

          <div className="feedback-banner">
            <h2>All Feedbacks</h2>
          </div>

          <div className="feedback-table">
            {feedbacks.length === 0 ? (
              <p>No feedback yet.</p>
            ) : (

              <table border={2}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Feedback</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {feedbacks.map((f) => (
                    <tr key={f._id}>
                      <td>{f.name}</td>
                      <td>{f.email}</td>
                      <td>{f.feedback}</td>
                       <td>
                        <button
                          className="delete-btn"
                          onClick={() => handleDelete(f._id)}
                        >
                          🗑️ Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          
          </div>

          <button className="back-btn" onClick={() => navigate(-1)} >Back</button>
        </div>
      </div>
    </div>
    
  );
};

export default FeedbackAdmin;
