import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

import { displayIsoDateString } from '../services/dates'

const Tile = ({
  post,
}) => {
  const { pathname } = useLocation()
  return (
    <Link
      key={post._id}
      to={pathname + '/' + post._id} 
      className='bg-cover bg-center flex flex-row grayscale-75 hover:grayscale-0'
      style={{ backgroundImage: `url(${post.thumbnail})` }}
    >
      <div className='transition-all duration-100 ease-in-out bg-black/75 hover:bg-black/60 p-4 flex flex-col justify-center items-end text-right gap-2 grow'>
        <h3 className='text-2xl font-semibold text-white leading-7'>{post.title}</h3>
        <div className='text-white/75'>{displayIsoDateString(post.created_at)}</div>
      </div>
      <div className='bg-green text-black flex flex-row items-center'>
        <i className='material-icons text-2xl'>chevron_right</i>
      </div>
    </Link>
  )
}


export default Tile
