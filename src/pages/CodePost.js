import React from 'react'
import { Link } from 'react-router-dom'

import Page from '../components/Page'
import LoadingIcon from '../elements/LoadingIcon'
import DateTag from '../elements/DateTag'
import CodePen from '../components/CodePen'
import Script from '../elements/Script'

import githubLogo from '../img/github.svg'

import '../styles/pages/Post.scss'

import restDB from '../services/restDB'

class CodePost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      post: null,
      loading: true
    }
  }

  componentDidMount() {
    restDB
      .codePost(this.props.location.pathname.split('/code/')[1])
      .then((json) => {
        this.setState({ post: json, loading: false })
      })
  }

  render() {
    return (
      <Page id='post' className='code'>
        <Link className='back' to='/code'>
          <i className='material-icons'>chevron_left</i>
          Back to code
        </Link>
        {this.state.loading ? 
          <LoadingIcon />
          : 
          <React.Fragment>
            {this.state.post.codepen ? 
              <CodePen
                title={this.state.post.title}
                hash={this.state.post.codepen}
              />
              : 
              <React.Fragment>
                {this.state.post.script ? 
                  <Script async={true} src={this.state.post.script} />
                  : 
                  <img
                    src={this.state.post.image}
                    alt={this.state.post.title + ' '}
                  />
                }
              </React.Fragment>
            }
            <div className='caption'>
              <h3>{this.state.post.title}</h3>
              <DateTag date={this.state.post.date} />
              <p
                className='body'
                dangerouslySetInnerHTML={{ __html: this.state.post.body }}
              />
              {this.state.post.link && 
                <p className='link'>
                  <i className='material-icons'>link</i>
                  <a href={this.state.post.link} target='blank'>
                    {this.state.post.link}
                  </a>
                </p>
              }
              {this.state.post.github && 
                <p className='github'>
                  <img src={githubLogo} alt='GitHub' />
                  <a href={this.state.post.github} target='blank'>
                    {this.state.post.github}
                  </a>
                </p>
              }
            </div>
          </React.Fragment>
        }
      </Page>
    )
  }
}

export default CodePost
