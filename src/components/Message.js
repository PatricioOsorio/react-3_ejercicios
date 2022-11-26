import React from 'react';

const Message = ({ text = 'Test message', color = 'primary', icon = 'info' }) => {
  const icons = {
    info: 'fa-solid fa-circle-info',
    success: 'fa-solid fa-circle-check',
    warning: 'fa-solid fa-triangle-exclamation',
    danger: 'fa-solid fa-circle-exclamation',
  };

  return (
    <div className=" d-flex justify-content-center align-items-center align-items-center h-100">
      <div
        className={`alert d-flex align-items-center alert-${color}`}
        role="alert"
      >
        <div className="bi flex-shrink-0 me-2">
          <i className={icons[icon]}></i>
        </div>
        <div>{text}</div>
      </div>
    </div>
  );
};

export default Message;
