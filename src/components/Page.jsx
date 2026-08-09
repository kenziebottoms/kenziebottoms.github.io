import React from 'react'

import Copyright from '../elements/Copyright'

const Page = props => 
  <div id={props.id} className={props.className}>
    {props.children}
    <Copyright />
  </div>


export default Page
