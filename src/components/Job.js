import React from 'react';

import TechTree from '../elements/TechTree';
import JobDescription from '../elements/JobDescription';

const Job = props => (
  <article className={props.classes || ''}>
    <h3>{props.company}</h3>
    <h4>{props.jobTitle}</h4>
    <p className="date">
      {props.startDate} — {props.endDate || 'present'}
    </p>
    <JobDescription description={props.description} />
    <TechTree tech={props.tech} />
  </article>
);

export default Job;