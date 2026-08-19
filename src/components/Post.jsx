import React from 'react'

import Page from '../components/Page'
import CodePen from '../components/CodePen'
import SanitizedHtml from '../components/SanitizedHtml'
import LinkBadge from '../elements/LinkBadge'
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
        <div className='grow flex flex-col md:grid md:grid-cols-2 gap-4'>
          {post.codepen ?
            <CodePen
              title={post.title}
              hash={post.codepen}
            /> :
            (post.script ?
              <Script async={true} src={post.script} /> :
              <img
                className='w-full h-auto max-h-100 self-start'
                src={post.image}
                alt={post.title + ' '}
              />)}
          <div className='grow flex flex-col gap-2'>
            <h3 className='font-semibold text-lg'>{post.title}</h3>
            <p className='opacity-60'>
              {displayIsoDateString(post.created_at)}
            </p>
            <SanitizedHtml html={post.body} />
            {post.link &&
              <LinkBadge
                link={post.link}
                image={
                  <i className='material-icons text-2xl text-neutral-300 dark:text-neutral-700'>link</i>
                }
              />
            }
            {post.github && <LinkBadge
              link={post.github}
              image={
                <img
                  src={githubLogo}
                  alt='GitHub'
                  className='h-6 w-6 p-1 invert dark:invert-0'
                />
              }
            />}
          </div>
        </div>}
    </Page>
  )
}

export default Post
