import React from 'react'

import Page from '../components/Page'
import CodePen from '../components/CodePen'
import SanitizedHtml from '../components/SanitizedHtml'
import LoadingIcon from '../elements/LoadingIcon'
import githubLogo from '../img/github.svg'

import { displayIsoDateString } from '../services/dates'

const Post = ({
  post,
  backButton,
}) => {
  return (
    <Page>
      {backButton}
      {!post && <LoadingIcon />}
      {post &&
        <div className='grow flex flex-col md:flex-row gap-4'>
          {post.codepen ?
            <CodePen
              title={post.title}
              hash={post.codepen}
            /> :
            (post.script ?
              <Script async={true} src={post.script} /> :
              <img
                className='md:w-1/2 max-h-100 self-start'
                src={post.image}
                alt={post.title + ' '}
              />)}
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold text-lg'>{post.title}</h3>
            <p className='opacity-60'>
              {displayIsoDateString(post.created_at)}
            </p>
            <SanitizedHtml html={post.body} />
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
        </div>}
    </Page>
  )
}

export default Post
