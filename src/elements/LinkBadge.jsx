import React from 'react'

const LinkBadge = ({
  image,
  link,
}) => {
  return <a
    href={link}
    target='_blank'
    rel='noopener noreferrer'
    className='flex flex-row gap-2 items-center max-w-full text-sm'
  >
    {image}
    <div className='truncate'>
      {link}
    </div>
  </a>
}

export default LinkBadge