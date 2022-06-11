import React from "react";
import "./Input.css";

function Input({ id, type, value, onChange, name }) {
  return (
    <div className="input-component">
      <input
        className="input-box"
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
      />
    </div>
  );
}

export default Input;
