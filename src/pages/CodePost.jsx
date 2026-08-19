import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import Button from '../components/Button'
import Post from '../components/Post'

import restDB from '../services/restDB'

const CodePost = () => {
  const { hash } = useParams()
  const [post, setPost] = useState()

  useEffect(() => {
    restDB
      .codePost(hash)
      .then(setPost)
  }, [])

  return (
      <Post
        post={post}
        backButton={
          <Button
            to='/code'
            icon='chevron_left'
            className='self-start'
          >
            Back to code
          </Button>
        }
      />
  )
}

export default CodePost
