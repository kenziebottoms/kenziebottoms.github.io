import RESTDB from '../keys'

const allArtPosts = () =>
  fetch(`${RESTDB.url}/artsy?apikey=${RESTDB.key}&sort=created_at&dir=-1`).then(
    response => response.json()
  )

const allCodePosts = () =>
  fetch(`${RESTDB.url}/code?apikey=${RESTDB.key}&sort=created_at&dir=-1`).then(
    response => response.json()
  )

const artPost = id =>
  fetch(`${RESTDB.url}/artsy/${id}?apikey=${RESTDB.key}`)
    .then(response => response.json())
    .then(blankTargetLinks)

const codePost = id =>
  fetch(`${RESTDB.url}/code/${id}?apikey=${RESTDB.key}`)
    .then(response => response.json())
    .then(blankTargetLinks)

const blankTargetLinks = json => {
  json.body = json.body.replace(/<a /g, '<a target=\'_blank\' ')
  return json
}

export default { allArtPosts, allCodePosts, artPost, codePost }
