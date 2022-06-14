import React from 'react';
import './style.css';

export const FormItem = (props) => {
  return (
    <div className="form-item-content">
      <p>{props.title}</p>
      <input
        type={props.type}
        placeholder="Email"
        onChange={props.onChange}
        value={props.name}
      />
    </div>
  );
};
