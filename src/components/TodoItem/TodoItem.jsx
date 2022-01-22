import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="list_item">
      <p 
        className={`item icon icon_check ${props.completed && 'icon_check--active'}`}
        onClick={props.onComplete}
      >
        <b>√</b>
      </p>
      <p className={`item item_text ${props.completed && 'item_text--complete'}`}>
        {props.text}
      </p>
      <p 
        className="item icon icon_delete"
        onClick={props.onDelete}
      >
        <b>X</b>
      </p>
    </li>
  );
}

export { TodoItem };