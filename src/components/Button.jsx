import React from 'react'

const Button = ({text, className}) => {
  return (
    <button className={`bg-black text-white py-3 ${className} font-semibold rounded-md hover:scale-95`}>{text}</button>
  )
}

export default Button