import React from 'react'
import DOMPurify from 'dompurify'

const sanitize = (dirty) => ({
  __html: DOMPurify.sanitize(
    dirty,
    {
      ALLOWED_TAGS: ['a', 'div'],
      ALLOWED_ATTR: ['href']
    }
  )
})

const SanitizedHtml = ({ html }) => {
  return <div dangerouslySetInnerHTML={sanitize(html)} />
}

export default SanitizedHtml