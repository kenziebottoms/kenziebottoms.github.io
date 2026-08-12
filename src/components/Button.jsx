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
      className={`${className} group bg-white dark:bg-white inline-flex items-center`}
    >
      {icon != null && <i className='material-icons text-xl bg-green-ll dark:bg-green group-hover:bg-green dark:group-hover:bg-green-ll p-1 text-white dark:text-black-hl'>{icon}</i>}
      <div className='px-2 dark:text-green-ll'>{children}</div>
    </Element>
  )
}

export default Button