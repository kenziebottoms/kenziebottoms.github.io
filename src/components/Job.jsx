import React from 'react'

import TechList from '../elements/TechList'
import JobDescription from '../elements/JobDescription'

const Job = props => 
  <article className={props.classes || ''}>
    <h3>{props.company}</h3>
    <h4>{props.jobTitle}</h4>
    <p className='date'>
      {props.startDate}{' — '}{props.endDate || 'present'}
    </p>
    <JobDescription description={props.description} />
    <TechList tech={props.tech} />
  </article>


export default Job
