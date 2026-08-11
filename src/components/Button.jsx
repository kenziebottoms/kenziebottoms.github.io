import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({
  icon,
  to,
  className = '',
  children
}) => {
  let Element = 'button'
  if (to != null) {
    Element = Link
  }

  return (
    <Element
      type={Element === 'button' ? 'button' : undefined}
      to={to}
      className={`${className} group border-2 bg-white dark:bg-black inline-flex items-center gap-2 pr-2`}
    >
      {icon != null && <i className='material-icons text-lg bg-green-ll dark:bg-green group-hover:bg-green dark:group-hover:bg-green-ll p-1 text-white dark:text-black'>{icon}</i>}
      {children}
    </Element>
  )
}

export default Button