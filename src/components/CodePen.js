import React from 'react'

import Script from '../elements/Script'

const CodePen = props => 
  <React.Fragment>
    <div
      className='codepen'
      data-theme-id='dark'
      data-default-tab='result'
      data-user='kenziebottoms'
      data-slug-hash={props.hash}
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1em',
      }}
    >
      <span>
        See this Pen{' '}
        <a href={`https://codepen.io/kenziebottoms/pen/${props.hash}/`}>
          {props.title}
        </a>{' '}
        by Kenzie Bottoms (
        <a href='https://codepen.io/kenziebottoms'>@kenziebottoms</a>) on{' '}
        <a href='https://codepen.io'>CodePen</a>.
      </span>
    </div>
    <Script
      id={props.hash}
      async={true}
      src='https://static.codepen.io/assets/embed/ei.js'
    />
  </React.Fragment>


export default CodePen
