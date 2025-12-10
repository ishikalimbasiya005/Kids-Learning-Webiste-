import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/Contact.css";

const Contact = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/feedback",
        { name, email, feedback }
      );
      alert(res.data.message); 
      setName("");
      setEmail("");
      setFeedback("");
    } catch (err) {
      alert("Error submitting feedback");
      console.log(err);
    }
  };

  return (
    <div className="contact-banner">
      <img src="assets/contact-banner.jpg" alt="contact-banner" className="contact-banner-img" />

      <div className="contact-info-banner">
        <div className="info-item">
          📧 <span>Email:</span> info@kidslearning.com
        </div>
        <div className="info-item">
          📞 <span>Contact No:</span> +91 99999 88888
        </div>
      </div>
      <div className="info-item">
          <p>✨"We’d love to hear from you! Whether you have questions, feedback, or new ideas for Kids Learning, our team is always ready to listen. Reach out to us anytime – let’s make learning fun together😊"✨</p>
        </div>


      <div className="contact-outer">
        <div className="container">
          <div className="contact-inner">
            <img src="assets/call-removebg-preview.png" alt="contact-call-image" />

            <div className="contact-page">
              <div className="contact-title-name">
                <h3>Contact Us</h3>
              </div>

              <div className="contact-info">
                <div className="contact-inner-info">
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" placeholder="Full-Name" value={name} onChange={(e) => setName(e.target.value)} />

                    <label htmlFor="email">Email:</label>
                    <input type="text" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="feedback">Feedback:</label>
                    <textarea name="Message" placeholder="Message..." rows={5} cols={27} value={feedback} onChange={(e) => setFeedback(e.target.value)} />

                    <button type="submit" className="contact-submit">Submit</button>
                  </form>
                </div>
              </div>
            </div>

            <img src="assets/contact-girl-removebg-preview.png" alt="contact-message" className="contact-msges" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
