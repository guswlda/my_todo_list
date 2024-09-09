import React, { useState } from 'react';

const Form = ({ createTodo }) => {
  const [value, setValue] = useState('aaa');

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(value);
    setValue('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        ref={(input) => input && input.focus()}
      />
      <button>submit</button>
    </form>
  );
};

export default Form;
