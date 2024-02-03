import React from 'react'

const Button = ({py,px,bg, borderRadius}) => {
  return (
    <div>
      <button className={`${py} ${px} ${bg} ${borderRadius}`}>
        Login
      </button>
    </div>
  )
}

export default Button
