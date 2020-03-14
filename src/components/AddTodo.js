import React, { Component } from 'react'

export class AddTodo extends Component {
  state ={
    title:''
  }

  setTitle = (e)=>{
    this.setState({[e.target.name]: e.target.value});
  }


  submit = (e) =>{
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: ''});
  }
  render() {
    return (
      <form onSubmit={this.submit} style = {{display: 'flex'}}>
        <input type="text" name="title" placeholder="Add Todo..." style={{flex : '10', padding: '5px'}} value = {this.state.title} onChange = {this.setTitle} />
        <input type="submit" value="Submit" className="btn" style={{flex : '1'}}/>
      </form>
    )
  }
}
 
export default AddTodo
