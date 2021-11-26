import React, { Fragment, useEffect, useState } from 'react'

import Tile from './Tile'
import LoadingIcon from '../elements/LoadingIcon'

import '../styles/components/TileGrid.scss'

const TileGrid = ({
  id,
  fetchData,
  linkHead,
  children
}) => {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    fetchData().then(setPosts)
  }, [])

  return (
    <div id={id} className={linkHead + ' tileGrid'}>
      {posts.length === 0 ?
        <LoadingIcon /> :
        <Fragment>
          {children}
          {posts.map(post => 
            <Tile key={post._id} post={post} />
          )}
        </Fragment>}
    </div>
  )
}

export default TileGrid
