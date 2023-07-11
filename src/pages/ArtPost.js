import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

import Page from '../components/Page'
import SanitizedHtml from '../components/SanitizedHtml'
import LoadingIcon from '../elements/LoadingIcon'
import DateTag from '../elements/DateTag'

import '../styles/pages/Post.scss'

import restDB from '../services/restDB'

const ArtPost = () => {
  const { hash } = useParams()
  const [post, setPost] = useState(null)
  useEffect(() =>{
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
    <Page id='post' className='art'>
      <Link className='back' to='/art'>
        <i className='material-icons'>chevron_left</i>
          Back to art
      </Link>
      {post ?  
        <Fragment>
          <img src={post.image} alt={post.title} />
          <div className='caption'>
            <h3>{post.title}</h3>
            <DateTag date={post.date} />
            <SanitizedHtml html={post.body} />
          </div>
        </Fragment> :
        <LoadingIcon />}
    </Page>
  )
}

export default ArtPost
