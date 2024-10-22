import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="container mt-4">
      <h1>Contact Us</h1>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea className="form-control" rows="4"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}

export default Contact;
