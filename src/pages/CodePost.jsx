import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import Button from '../components/Button'
import Page from '../components/Page'
import LoadingIcon from '../elements/LoadingIcon'
import CodePen from '../components/CodePen'
import SanitizedHtml from '../components/SanitizedHtml'
import Script from '../elements/Script'

import githubLogo from '../img/github.svg'

import { displayIsoDateString } from '../services/dates'
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
    <Page id='post'>
      <Button
        to='/code'
        icon='chevron_left'
        className='self-start'
      >
        Back to code
      </Button>
      {post ?
        <div className='grow flex flex-col md:flex-row gap-4'>
          {post.codepen ?
            <CodePen
              title={post.title}
              hash={post.codepen}
            />
            :
            <React.Fragment>
              {post.script ? <Script async={true} src={post.script} /> :
                <img
                  className='md:w-1/2 max-h-100 self-start'
                  src={post.image}
                  alt={post.title + ' '}
                />}
            </React.Fragment>
          }
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold text-lg'>{post.title}</h3>
            <p className='opacity-60'>
              {displayIsoDateString(post.created_at)}
            </p>
            <div className='body'>
              <SanitizedHtml html={post.body} />
            </div>
            {post.link &&
              <p className='link'>
                <i className='material-icons'>link</i>
                <a href={post.link} target='blank'>
                  {post.link}
                </a>
              </p>
            }
            {post.github &&
              <div className='flex flex-row gap-2'>
                <img
                  src={githubLogo}
                  alt='GitHub'
                  className='h-6 w-6 dark:invert'
                />
                <a href={post.github} target='blank'>
                  {post.github}
                </a>
              </div>
            }
          </div>
        </div> :
        <LoadingIcon />
      }
    </Page>
  )
}

export default CodePost
