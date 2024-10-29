import React from 'react';
import "../styles/NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-light">404 - Not Found</h1>
      <p className="text-light">The page you are looking for does not exist.</p>
      <a href="/" className="btn btn-primary mt-3">Go Home</a>
    </div>
  );
};

export default NotFound;
