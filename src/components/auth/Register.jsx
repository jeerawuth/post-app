import React, { useState } from "react";

const Register = () => {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });
  const inputHandler = (e) => {
    setFormInput({
      [e.target.name]: e.target.value,
    });
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formInput);
  };
  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <input type="email" onChange={inputHandler} value={formInput.email} />
        <input type="text" onChange={inputHandler} value={formInput.password} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
