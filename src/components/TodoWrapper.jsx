import React, { useState } from 'react';
import Form from './Form';
import Todo from './Todo';
import Edit from './Edit';

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const createTodo = (a) => {
    setTodos([
      ...todos,
      { text: a, id: todos.length, isEdit: false, isDone: false },
    ]);
  };

  const deleteTodo = (a) => {
    // console.log(a);
    setTodos(todos.filter((todo) => todo.id !== a));
  };

  const editTodo = (a) => {
    // console.log(a);
    setTodos(
      todos.map((todo) =>
        todo.id === a ? { ...todo, isEdit: !todo.isEdit } : todo
      )
    );
  };

  const isComplete = (a) => {
    // console.log(a);
    setTodos(
      todos.map((todo) =>
        todo.id === a ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const editTask = (a, b) => {
    // console.log(a, b);
    setTodos(
      todos.map((todo) =>
        todo.id === b ? { ...todo, text: a, isEdit: false } : todo
      )
    );
  };

  // console.log(todos);
  return (
    <div>
      <Form createTodo={createTodo} />

      {todos.map((todo, idx) =>
        todo.isEdit ? (
          <Edit key={idx} editTask={editTask} todo={todo} />
        ) : (
          <Todo
            key={idx}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            isComplete={isComplete}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;

{
  /* <Todo
key={idx}
todo={todo}
deleteTodo={deleteTodo}
editTodo={editTodo}
/> */
}
