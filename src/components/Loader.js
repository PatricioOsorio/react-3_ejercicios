import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="lds-roller text-center">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
