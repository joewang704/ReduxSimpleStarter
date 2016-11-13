import React, { Component } from 'react'
import { Card, CardHeader, CardText, CardActions, TextField } from 'material-ui'
import Entry from './entry'
import Nugget from './nugget'

export default class App extends Component {
  render() {
    return (
      <div>
        <Entry />
        <Nugget topic="Dank Memes" content="meme" />
      </div>
    )
  }
}
