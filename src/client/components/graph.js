import React, { Component } from 'react'
import _ from lodash
import Nugget from './nugget'

const propTypes = {
    current: React.PropTypes.object
    nodes: React.PropTypes.array
}

export default class Graph extends Component {
  render() {
    return (
      <div>
        <Nugget topic={this.props.current.topic} content={this.props.current.content} />
        this.props.nodes.forEach((node) => {
            <Nugget style={{position: "absolute", x: node.x, y: node.y}} topic={node.topic} content={node.content} />
        })
      </div>
    )
  }
}
