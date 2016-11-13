import React, { Component } from 'react'
import { Card, CardHeader, CardText, CardActions, TextField } from 'material-ui'

export default class Entry extends Component {
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

    return (
      <Card className="newTopic card">
        <CardHeader title="I want to learn..." titleStyle={headerStyle}/>
        <CardText className="center">
          <TextField inputStyle={inputStyle} hintStyle={hintStyle} hintText="ex. data structures" />
        </CardText>
      </Card>
    )
  }
}
