import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

import { displayIsoDateString } from '../services/dates'

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
    'December',
  ]
  let d = new Date(epoch)
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
}

const Tile = ({
  post,
}) => {
  const { pathname } = useLocation()
  return (
    <div
      className='tile'
      key={post._id}
      style={{ backgroundImage: `url(${post.thumbnail})` }}
    >
      <Link to={pathname + '/' + post._id}>
        <div className='overlay'>
          <h3>{post.title}</h3>
          {post.date != null && post.created_at == null &&
            <div className='date'>{formatDate(post.date * 1000)}</div>}
          {post.created_at != null &&
            <div className='date'>{displayIsoDateString(post.created_at)}</div>}
        </div>
      </Link>
    </div>
  )
}


export default Tile
