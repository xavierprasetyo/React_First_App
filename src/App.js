import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos : [
      {
        id :1,
        title : 'Bandung',
        done : false
      },
      {
        id :2,
        title : 'Jakarta',
        done : false
      },
      {
        id :1,
        title : 'Malang',
        done : true
      }
    ]
  }
  render(){
    return (
      <div className="App">
        <Todos todos = {this.state.todos}/>
      </div>
    );
  }
}


export default App;
