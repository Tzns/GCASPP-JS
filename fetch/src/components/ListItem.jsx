import React from 'react';

export default function ListItem({ onChange, onDelete, value }) {
  return (
    <div className="Item-container">
      <input
        className="Item-field"
        value={value}
        onChange={onChange}
      />
      <button onClick={onDelete}>Excluir</button>
    </div>
  );
};

