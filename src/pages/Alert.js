import React from 'react';
import styled from 'styled-components';

const Alert = ({ message }) => {
  return (
    <StyledAlert>
      <div className="alert-box">
        <span>{message}</span>
      </div>
    </StyledAlert>
  );
};

const StyledAlert = styled.div`
  position: fixed;
  top :50px;
  // Change from top to bottom
  left: 50%;
  transform: translateX(-50%);
  background-color: #D7F1FD;
  color: #0C2A75;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 5px -3px #111;
  font-weight: bold;
`;

export default Alert;
