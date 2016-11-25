import React from 'react';
import TodosListItem from './TodosListItem';
import TodosListHeader from './TodosListHeader';

export default class TodosList extends React.Component {
  renderItems() {
    return this.props.todos.map((todo, i) => {
      return <TodosListItem
        key={i}
        {...todo}
        toggleTask={this.props.toggleTask}
        saveTask={this.props.saveTask}
        deleteTask={this.props.deleteTask}
       />
    });
  }

  render() {
    return (
      <table>
        <TodosListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}
