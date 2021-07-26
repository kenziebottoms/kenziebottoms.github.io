import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/components/Tile.scss'

function formatDate(epoch) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  let d = new Date(epoch)
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
}

const Tile = props => 
  <div
    className={`${props.linkHead} tile`}
    key={props.post._id}
    style={{ backgroundImage: `url(${props.post.thumbnail})` }}
  >
    <Link to={props.linkHead + '/' + props.post._id}>
      <div className='overlay'>
        <h3>{props.post.title}</h3>
        <div className='date'>{formatDate(props.post.date * 1000)}</div>
      </div>
    </Link>
  </div>


export default Tile
