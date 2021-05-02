import React, { Fragment,useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Page from '../components/Page'
import LoadingIcon from '../elements/LoadingIcon'
import DateTag from '../elements/DateTag'

import '../styles/pages/Post.scss'

import restDB from '../services/restDB'

const ArtPost = ({
  location: {
    pathname
  }
}) => {
  const [post, setPost] = useState(null)
  useEffect(() =>{
    restDB
      .artPost(pathname.split('/art/')[1])
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
            <p dangerouslySetInnerHTML={{ __html: post.body }} />
          </div>
        </Fragment> :
        <LoadingIcon />}
    </Page>
  )
}

export default ArtPost
