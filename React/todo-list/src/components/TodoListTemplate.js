import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children, palette}) => {
  return (
    <main className="todo-list-template">
      <div className="title">
        Todo List
      </div>
      <div className = "palette-wrapper">
        {palette}
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="todos-wrapper">
        { children }
      </section>
    </main>
  );
};

export default TodoListTemplate;