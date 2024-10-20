import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; // Include custom styles if needed
import { Link } from "react-router-dom";

const SubmissionSuccess = ({ formData }) => {
  return (
    <div className="container mt-5">
      <div className="alert alert-success text-center p-5 shadow-sm rounded">
        <h1 className="mb-4">Thank You, {formData.name}!</h1>
        <p>Your message has been sent successfully. We appreciate your feedback and will get back to you soon.</p>
        <div className="submitted-details mt-4">
          <h5>Details You Submitted:</h5>
          <ul className="list-group mt-3">
            <li className="list-group-item"><strong>Email:</strong> {formData.email}</li>
            <li className="list-group-item"><strong>Message:</strong> {formData.message}</li>
          </ul>
        </div>
      </div>

      {/* Centering the button */}
      <div className="d-flex justify-content-center mt-4">
        <Link to="/">
          <button className="btn btn-primary">Back to Home</button>
        </Link>
      </div>  
    </div>
  );
}

export default SubmissionSuccess;
