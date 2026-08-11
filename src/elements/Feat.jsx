import React from 'react'

const Feat = ({ icon, title, children }) => 
  <div className='px-4 py-3 bg-white dark:bg-black-hl flex flex-row gap-4 items-center'>
    <i className='text-black bg-green p-2 text-3xl rounded-full material-icons'>{icon}</i>
    <div>
      <h3 className='text-xl font-semibold'>{title}</h3>
      {children}
    </div>
  </div>

export default Feat
