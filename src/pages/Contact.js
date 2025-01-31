import React, { useState } from 'react';
import styled from 'styled-components';
import Alert from './Alert'; // Make sure to import the Alert component

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false); // State to control alert visibility
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    setMessage('Thank you for your feedback!'); // Set message for the alert
    setShowAlert(true); // Show the alert

    // Optionally, hide the alert after a few seconds
    setTimeout(() => {
      setShowAlert(false); // Hide the alert after 3 seconds
    }, 3000);
  };

  return (
    <StyledWrapper>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input required name="name" id="name" type="text" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input required name="email" id="email" type="email" />
          </div>

          <div className="form-group">
            <label htmlFor="textarea">Feedback</label>
            <textarea required cols={50} rows={10} id="textarea" name="textarea" />
          </div>

          <button type="submit" className="form-submit-btn">Submit</button>
        </form>
      </div>

      {/* Conditionally render the Alert component */}
      {showAlert && <Alert message={message} />}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;

  .form-container {
    width: 100%;
    max-width: 500px;
    padding: 32px 24px;
    font-size: 14px;
    font-family: inherit;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    border-radius: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  .form-container .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .form-container .form-group label {
    display: block;
    margin-bottom: 5px;
    color: #717171;
    font-weight: 600;
    font-size: 12px;
  }

  .form-container .form-group input,
  .form-container .form-group textarea {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    color: black;
    font-family: inherit;
    background-color: transparent;
    border: 1px solid #414141;
    box-sizing: border-box;
  }

  .form-container .form-group input::placeholder,
  .form-container .form-group textarea::placeholder {
    opacity: 0.5;
  }

  .form-container .form-group input:focus,
  .form-container .form-group textarea:focus {
    outline: none;
    border-color: #e81cff;
  }

  .form-container .form-submit-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
    color: #fff;
    font-weight: 600;
    width: 100%;
    background: #414141;
    border: 1px solid #414141;
    padding: 12px 16px;
    font-size: inherit;
    gap: 8px;
    margin-top: 8px;
    cursor: pointer;
    border-radius: 6px;
  }

  .form-container .form-submit-btn:hover {
    background-color: #414141;
    border-color: #fff;
  }

  .form-container button:active {
    scale: 0.95;
  }
`;

export default Contact;











