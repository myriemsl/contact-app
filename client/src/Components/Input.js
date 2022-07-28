import React from 'react';

const Input = ({label ,name, type, onChange, errors, value}) => {
  return (
    <div className='addinput'>
     <span>{label}</span>
     <input  name={name} type={type} value={value} onChange={onChange}/>
     { errors && (<span style={{color:'red'}}> {errors} </span>)}
    </div>
  )
}

export default Input;