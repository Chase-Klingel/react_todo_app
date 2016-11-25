import React from 'react';

export default class CreateTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    };
  }

  renderError() {
    if (!this.state.error) {
      return null;
    }

    return <div style={{ color: 'red' }}>{this.state.error}</div>;
  }

  handleNewToDo(event) {
    event.preventDefault();

    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateInput(task);

    if (validateInput) {
      this.setState({ error: validateInput });
      return;
    }

    this.setState({ error: null });
    this.props.createTask(task);
    this.refs.createInput.value = '';
  }

  validateInput(task) {
    if (!task) {
      return 'Please enter a task.';
    } else if (this.props.todos.find((todo) => todo.task === task)) {
      return 'Task already exists.';
    } else {
      return null;
    }
  }

  render() {
    return (
      <form onSubmit={this.handleNewToDo.bind(this)}>
        <input type="text" placeholder="What do I need to do?" ref="createInput" />
        <button type="submit">Create</button>
        {this.renderError()}
      </form>
    );
  }
}
