import React, { Component } from 'react'
import { Card, CardHeader, CardText, CardActions, TextField } from 'material-ui'

const propTypes = {
    topic: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired
}

export default class Nugget extends Component {
  render() {
    const headerStyle = {
      fontSize: 30,
      textAlign: "center",
      color: "#FFFFFF"
    }

    const hintStyle= {
      color: "#E8E8E8"
    }

    const inputStyle = {
      color: "#FFFFFF"
    }

    const textStyle = {
        color: "#FFFFFF"
    }

    return (
      <Card className="card">
        <CardHeader title={this.props.topic} titleStyle={headerStyle}/>
        <CardText style={textStyle} className="center">
          {this.props.content}
        </CardText>
      </Card>
    )
  }
}

Nugget.propTypes = propTypes
