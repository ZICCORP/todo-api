import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

const list = [
  {
    "id": 1,
    "title": "Learn Javascript",
    "body": "Familiarize myself with the JavaScript programming language."
  },
  {
    "id": 2,
    "title": "Learn React",
    "body": "Familiarize myself  with the JavaScript frontend framework react in order to me able to manipulate the document object model(DOM)"
  },
  {
    "id": 3,
    "title": "Learn Cascading Style Sheet(CSS)",
    "body": "Familiarize myself with css in order to be able to beautify my site"
  }
]


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { list };
  }

  render() {
    return (
      <div>
        {this.state.list.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;