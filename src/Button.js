import React from "react";
import "./Button.css";
function Button({ type, children, onClick }) {
  return (
    <button className="login-button" type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
