import React from 'react';

const Todo = ({ todo, deleteTodo, editTodo, isComplete }) => {
  console.log(todo);
  return (
    <div style={{ textDecoration: todo.isDone ? 'line-through' : '' }}>
      {todo.text}
      <div>
        <button onClick={() => editTodo(todo.id)}>수정</button>
        <button onClick={() => deleteTodo(todo.id)}>삭제</button>
        <button onClick={() => isComplete(todo.id)}>완료</button>
      </div>
    </div>
  );
};

export default Todo;
