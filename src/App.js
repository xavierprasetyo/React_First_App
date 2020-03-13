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
        id :3,
        title : 'Malang',
        done : false
      }
    ]
  }

  delTodo = (id) =>{
    this.setState({todos : [...this.state.todos.filter(todo => todo.id !== id)]});
  }


  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo =>{
      if(todo.id === id){
        todo.done = !todo.done;
      }
      return todo;
    })  });
  }

  render(){
    return (
      <div className="App">
        <Todos todos = {this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo}/>
      </div>
    );
  }
}


export default App;
