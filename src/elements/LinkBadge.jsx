import React from 'react'

const LinkBadge = ({
  image,
  link,
}) => {
  return <a
    href={link}
    target='_blank'
    rel='noopener noreferrer'
    className='group inline-flex self-start flex-row gap-1 items-center max-w-full text-sm bg-white'
  >
    <div className='p-1 shrink-0 grow-0 bg-black-hl group-hover:bg-black-hl/85 dark:bg-neutral-300 dark:group-hover:bg-neutral-200'>
      {image}
    </div>
    <div className='truncate p-1 pr-2 dark:text-green-ll dark:group-hover:text-green'>
      {link}
    </div>
  </a>
}

export default LinkBadge