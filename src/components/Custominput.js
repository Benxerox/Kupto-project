import React from 'react'

const Custominput = (props) => {
  const {type,name,classname,placeholder} = props;
  return (
    <div>
      <input 
      type={type}
      name={name} 
      className={`form-cont ${classname}`}
      placeholder={placeholder}
      />
  </div>
  )
}

export default Custominput