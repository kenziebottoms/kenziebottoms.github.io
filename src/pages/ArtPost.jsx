import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import Button from '../components/Button'
import Post from '../components/Post'

import restDB from '../services/restDB'

const ArtPost = () => {
  const { hash } = useParams()
  const [post, setPost] = useState(null)
  useEffect(() => {
    restDB
      .artPost(hash)
      .then(setPost)
  }, [])

  return (
    <Post
      post={post}
      backButton={
        <Button
          to='/art'
          icon='chevron_left'
          className='self-start'
        >
          Back to art
        </Button>
      }
    />
  )
}

export default ArtPost
