import React from 'react'

const FormInput = (props) => {
    const {label , name , type , placeholder ,onChange,...others} = props; 
  return (
    <>
      <label>{label}</label>
      <input name={name} type={type} placeholder={placeholder} onChange={onChange}/>
    </>
  );
}

export default FormInput
