import React from 'react'

const Page = ({
  id,
  className = '',
  children
}) => 
  <div id={id} className={`${className} min-h-full flex flex-col gap-4`}>
    <div className='grow'>
      {children}
    </div>
    <a
      id='copyright'
      href='https://github.com/kenziebottoms/kenziebottoms.github.io'
      target='_blank' rel='noopener noreferrer'
      className='text-gray-500 text-center text-sm inline-flex gap-2 mx-auto items-center'
    >
      Source on GitHub{' '}
      <i className='material-icons inline-block'>launch</i>
    </a>
  </div>


export default Page
