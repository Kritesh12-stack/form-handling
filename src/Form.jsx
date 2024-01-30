import React, { useState } from "react";
import FormInput from "./FormInput";

const Form = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputData = [
    {
      id: 1,
      name: "username",
      type: "text",
      label: "username",
      placeholder: "Your Username *",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      label: "E-mail",
      placeholder: "Your Work Email ID *",
    },
    {
      id: 3,
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Your Password *",
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      label: "Confirm Password",
      placeholder: "Confirm Password *",
    },
  ];

  const onChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };
  const handleSumit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <div className="form">
      <form onSubmit={handleSumit}>
        <h1>Sign-Up</h1>
        {inputData.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[inputData.name]}
            onChange={onChange}
          />
        ))}
        <button>Sign-Up</button>
      </form>
    </div>
  );
};

export default Form;
