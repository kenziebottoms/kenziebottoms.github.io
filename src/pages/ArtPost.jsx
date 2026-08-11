import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import Button from '../components/Button'
import Page from '../components/Page'
import SanitizedHtml from '../components/SanitizedHtml'
import LoadingIcon from '../elements/LoadingIcon'

import { displayIsoDateString } from '../services/dates'
import restDB from '../services/restDB'

const ArtPost = () => {
  const { hash } = useParams()
  const [post, setPost] = useState(null)
  useEffect(() => {
    restDB
      .artPost(hash)
      .then(json => {
        // make all links open in new tabs
        json.body = json.body
          .replace('<a ', '<a target=\'_blank\' rel=\'noopener noreferrer\' ')
        setPost(json)
      })
  }, [])

  return (
    <Page className='min-h-full'>
      <Button
        to='/art'
        icon='chevron_left'
        className='mb-2'
      >
        Back to art
      </Button>
      {post ?
        <div className='grow flex flex-col md:flex-row gap-4'>
          <img
            className='md:w-1/2'
            src={post.image}
            alt={post.title}
          />
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold text-lg'>{post.title}</h3>
            <p className='opacity-60'>
              {displayIsoDateString(post.created_at)}
            </p>
            <SanitizedHtml html={post.body} />
          </div>
        </div> :
        <LoadingIcon />}
    </Page>
  )
}

export default ArtPost
