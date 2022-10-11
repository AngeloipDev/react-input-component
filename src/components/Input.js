import React from "react";

export const Input = ({
  type,
  name,
  id,
  onChange,
  value,
  onClick,
  icon,
  text
}) => {
  return (
    <div className="cont_input">
      <input
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        autoComplete="off"
        placeholder=" "
        className="form__input"
      />
      <span className="icon" onClick={onClick}>
        {icon}
      </span>
      <label className="form__label" htmlFor={id}>
        {text}
      </label>
    </div>
  );
};
