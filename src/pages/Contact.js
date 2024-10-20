import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import SubmissionSuccess from './ConfirmationMessage';

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <SubmissionSuccess formData={formData} />;
  }

  return (
    <div className="contactDiv container mt-5">
      <h1 className="h1text">Contact Me!</h1>
      <p className="ptext">Please fill out the form below, and I'll get back to you shortly:</p>

      <form onSubmit={handleSubmit} className="form-container">
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label text">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            name="name"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label text">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            name="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="messageTextarea" className="form-label text">Your Message</label>
          <textarea
            className="form-control"
            id="messageTextarea"
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>

        <div className="mb-3">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactMe;
