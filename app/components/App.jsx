import React from 'react';
import CreateToDo from './CreateTodo';
import TodosList from './TodosList';

const todos = [
  {
    task: 'make React tutorial',
    isCompleted: false
  },
  {
    task: 'eat dinner',
    isCompleted: true
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: todos
    }
  }

  createTask(task) {
    this.state.todos.push({
      task: task,
      isCompleted: false
    })
    this.setState({ todos: this.state.todos });
  }

  toggleTask(task) {
    let foundToDo = this.state.todos.find((todo) => todo.task === task);

    foundToDo.isCompleted = !foundToDo.isCompleted;
    this.setState({ todos: this.state.todos });
  }

  saveTask(oldTask, newTask) {
    let foundToDo = this.state.todos.find((todo) => todo.task === oldTask);
    foundToDo.task = newTask;
    this.setState({ todos: this.state.todos });
  }

  deleteTask(task) {
    let taskToDelete = this.state.todos.find((todo) => todo.task === task);
    taskToDelete = this.state.todos.indexOf(taskToDelete);
    this.state.todos.splice(taskToDelete, 1);
    this.setState({ todos: this.state.todos });
  }

  render() {
    return (
      <div>
        <h1>React Todos App</h1>
        <CreateToDo
          todos={this.state.todos}
          createTask={this.createTask.bind(this)}
        />
        <TodosList
          todos={this.state.todos}
          toggleTask={this.toggleTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
        />
      </div>
    );
  }
};

export default App;
