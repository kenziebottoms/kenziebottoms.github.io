import React from 'react'

class Script extends React.Component {
  componentDidMount() {
    const script = document.createElement('script')

    script.src = this.props.src
    script.async = this.props.async

    document.getElementById(this.props.id).appendChild(script)
  }
  render() {
    return <div className='script hidden' id={this.props.id} />
  }
}

export default Script
