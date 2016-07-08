 var React = require('react');
var _ = require("lodash");
 var todos = [
 {
   task: 'monzer is cool',
   isCompleted: false
 },
 {
   task: 'eat dinner',
   isCompleted: false
 }];

var Extends = React.createClass({
  getInitialState(){
      return {
        todos,
        newItemText: "test"
      }
  },
  newItemTextChange(e){
    this.setState({
      newItemText: e.target.value
    });
  },
  render() {
      return (
          <div>
              <h1>Todo List</h1>
              <input className="karam" type="text" value={this.state.newItemText}
                    onChange={this.newItemTextChange}></input>

              <button onClick={this.createTask}>Add</button>
              <ul>
                {
                  this.state.todos.map(item => { return <li><button onClick={this.deleteTask.bind(null, item)}>x</button>{item.task}</li> })
                }
              </ul>
          </div>
      );
  },
  toggleTask(task) {

      const foundTodo = _.find(this.state.todos, todo => todo.task === task);
      foundTodo.isCompleted = !foundTodo.isCompleted;
      this.setState({ todos: this.state.todos });
  },
  createTask() {
    var task = this.state.newItemText;

    this.state.todos.push({
        task,
        isCompleted: false
    });

    this.setState({ todos: this.state.todos, newItemText: "" });
  },
  saveTask(oldTask, newTask) {
      const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
      foundTodo.task = newTask;
      this.setState({ todos: this.state.todos });
  },
  deleteTask(taskToDelete) {
    debugger;
      _.remove(this.state.todos, todo => todo === taskToDelete);
      this.setState({ todos: this.state.todos });
  }
});

module.exports = Extends;
