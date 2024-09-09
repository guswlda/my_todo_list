import React, { useState } from 'react';

const Edit = ({ editTask, todo }) => {
  const [value, setValue] = useState('aaa');

  // console.log(todo);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(value, todo.id);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        ref={(input) => input && input.focus()}
      />
      <button>edit</button>
    </form>
  );
};

export default Edit;
