import React from 'react'

const Job = (props) => 
  <article className={`${props.classes} p-4 bg-white dark:bg-black-hl space-y-4`}>
    <div>
      <h3 className='text-lg font-bold'>{props.company}</h3>
      <h4 className='text-md font-semibold opacity-60'>{props.jobTitle}</h4>
    </div>
    <p>
      {props.startDate}{' — '}{props.endDate || 'present'}
    </p>
    <ul className='text-sm ml-4 list-disc'>
      {props.description.map((li, i) => <li key={i}>{li}</li>)}
    </ul>
    <div className='mt-4 flex flex-row flex-wrap gap-2'>
      {props.tech.map((tech, i) => 
        <div key={i} className='text-xs font-light inline-block py-1 px-2 bg-neutral-200/75 dark:bg-neutral-600'>{tech}</div>
      )}
    </div>
  </article>

export default Job
