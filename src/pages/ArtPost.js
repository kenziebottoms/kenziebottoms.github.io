import React from 'react'
import { Link } from 'react-router-dom'

import Page from '../components/Page'
import LoadingIcon from '../elements/LoadingIcon'
import DateTag from '../elements/DateTag'

import '../styles/pages/Post.scss'

import restDB from '../services/restDB'

class ArtPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      post: null,
      loading: true
    }
  }

  componentDidMount() {
    restDB
      .artPost(this.props.location.pathname.split('/art/')[1])
      .then(json => {
        // make all links open in new tabs
        json.body = json.body.replace('<a ', '<a target=\'_blank\' ')
        this.setState({ post: json, loading: false })
      })
  }

  render() {
    return (
      <Page id='post' className='art'>
        <Link className='back' to='/art'>
          <i className='material-icons'>chevron_left</i>
          Back to art
        </Link>
        {this.state.loading ? 
          <LoadingIcon />
          : 
          <React.Fragment>
            <img src={this.state.post.image} alt={this.state.post.title} />
            <div className='caption'>
              <h3>{this.state.post.title}</h3>
              <DateTag date={this.state.post.date} />
              <p dangerouslySetInnerHTML={{ __html: this.state.post.body }} />
            </div>
          </React.Fragment>
        }
      </Page>
    )
  }
}

export default ArtPost
