import React from 'react'

const TechList = ({ tech }) => 
  <div className='tech'>
    {tech &&
      tech.map((name, i) => 
        <span key={i} className='tag'>
          {name}
        </span>
      )}
  </div>

export default TechList
