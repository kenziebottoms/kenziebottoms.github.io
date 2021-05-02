import React, { Fragment, useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

import Page from '../components/Page'
import LoadingIcon from '../elements/LoadingIcon'
import DateTag from '../elements/DateTag'
import CodePen from '../components/CodePen'
import Script from '../elements/Script'

import githubLogo from '../img/github.svg'

import '../styles/pages/Post.scss'

import restDB from '../services/restDB'

const CodePost = ({
  location: {
    pathname
  }
}) => {
  const [post, setPost] = useState(null)

  useEffect(() => {
    restDB
      .codePost(pathname.split('/code/')[1])
      .then(setPost)
  }, [])

  return (
    <Page id='post' className='code'>
      <Link className='back' to='/code'>
        <i className='material-icons'>chevron_left</i>
          Back to code
      </Link>
      {post ?  
        <Fragment>
          {post.codepen ? 
            <CodePen
              title={post.title}
              hash={post.codepen}
            />
            : 
            <React.Fragment>
              {post.script ? 
                <Script async={true} src={post.script} />
                : 
                <img
                  src={post.image}
                  alt={post.title + ' '}
                />
              }
            </React.Fragment>
          }
          <div className='caption'>
            <h3>{post.title}</h3>
            <DateTag date={post.date} />
            <p
              className='body'
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
            {post.link && 
                <p className='link'>
                  <i className='material-icons'>link</i>
                  <a href={post.link} target='blank'>
                    {post.link}
                  </a>
                </p>
            }
            {post.github && 
                <p className='github'>
                  <img src={githubLogo} alt='GitHub' />
                  <a href={post.github} target='blank'>
                    {post.github}
                  </a>
                </p>
            }
          </div>
        </Fragment> : 
        <LoadingIcon />
      }
    </Page>
  )
}

export default CodePost
