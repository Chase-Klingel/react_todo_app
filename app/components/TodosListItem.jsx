import React from 'react';

export default class TodosListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }

  handleEdit() {
    this.setState({ isEditing: true });
  }

  handleCancel() {
    this.setState({ isEditing: false });
  }

  handleCompleted() {

  }

  renderTaskSection() {
    const { task, isCompleted } = this.props;
    const taskStyle = {
      color: isCompleted ? 'green' : 'red',
      cursor: 'pointer'
    }

    if (this.state.isEditing) {
      return (
        <td>
          <form onSubmit={this.handleSave.bind(this)}>
            <input type="text" defaultValue={task} ref="editInput" />
          </form>
        </td>
      )
    }

    return (
      <td style={taskStyle} onClick={this.props.toggleTask.bind(this, task)}>{task}</td>
    );
  }

  handleSave(event) {
    event.preventDefault();

    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;

    this.props.saveTask(oldTask, newTask);
    this.setState({ isEditing: false });
  }

  renderActionSection() {
    if (this.state.isEditing) {
      return (
        <td>
          <button onClick={this.handleSave.bind(this)}>Save</button>
          <button onClick={this.handleCancel.bind(this)}>Cancel</button>
        </td>
      );
    }

    return (
      <td>
        <button onClick={this.handleEdit.bind(this)}>Edit</button>
        <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
      </td>
    );
  }

  render() {
    return (
      <tr>
        {this.renderTaskSection()}
        {this.renderActionSection()}
      </tr>
    );
  }
}
