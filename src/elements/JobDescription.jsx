import React from 'react'

const JobDescription = ({ description }) => 
  <ul>
    {description &&
      description.map((item, i) => <li key={i}>{item}</li>)}
  </ul>

export default JobDescription
