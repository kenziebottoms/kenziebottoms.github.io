import React from 'react'

const Feat = ({ icon, title, children }) => 
  <div className='achievement'>
    <i className='material-icons'>{icon}</i>
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  </div>

export default Feat
