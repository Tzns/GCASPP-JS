import React, { useState } from 'react';

export default function  Item  ({ onSubmit }) {

  const [item, setItem] = useState('');

  function addItem({target}) {
    setItem(target.value);
  }

  function submit(e) {
    e.preventDefault();
    onSubmit(item);
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input          
          placeholder="Digite uma nova tarefa"
          onChange={addItem}
        />
        <button type="submit">
          Adicionar
        </button>
      </form>
    </div>
  )
};

