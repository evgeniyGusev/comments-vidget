import React from 'react';
import './Comment.css';
import avatar from './avatar.png';

const Comment = (props) => {
  return (
    <li className='comment'>
      <div className='comment__auth-info'>
        <img className='comment__auth-ava' alt='avatar' src={avatar} />
        <span className='comment__auth-name'>{props.name}</span>
        <button className='comment__delete-btn' onClick={props.delete}>+</button>
      </div>
      <div className='comment__text'>{props.text}</div>
      <div className='comment__date'>{props.date}</div>
    </li>
  )
}

export default Comment;