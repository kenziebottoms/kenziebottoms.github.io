import React from 'react'
import { Link } from 'react-router-dom'

/* eslint-disable max-len */
const svg = 
  <svg
    xmlns='http://www.w3.org/2000/svg' height='34'
    width='34'
  >
    <path d='M0 10h24v24H0z' fill='none' />
    <path
      d='M.321 59.766h23.358v2.997H.321z' fill='#000'
      fillRule='evenodd'
    />
    <path d='M0 10h24v24H0z' fill='none' />
    <path
      d='M30.707 9.535c0-4.402-2.985-7.985-7.077-8.896v32.722c4.092-.91 7.077-4.495 7.077-8.896 0-2.887-1.345-5.657-3.468-7.465 2.123-1.808 3.468-4.578 3.468-7.465zM18.657.844c-1.7.49-3.36 1.426-5.06 2.69v26.932c1.7 1.262 3.358 2.2 5.059 2.69V.844zM8.627 7.969c-1.9 1.925-3.921 4.142-6.176 6.627L.26 17l2.176 2.404c2.259 2.488 4.285 4.708 6.19 6.633V7.969z'
      fill='#000'
    />
  </svg>


const Logo = ({ link }) =>
  link ?
    <Link to='/'>{svg}</Link> :
    svg

export default Logo
