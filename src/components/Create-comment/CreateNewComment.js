import React from 'react';
import './CreateNewComment.css';

const CreateNewComment = (props) => {
  return (
    <React.Fragment>
      <input
        type='text'
        className='vidget__name-input'
        placeholder='Имя'
        onChange={ props.setNameValue }
        value={ props.authorName }
      />
      <textarea
        type='text'
        className='vidget__text-input'
        placeholder='Текст'
        onChange={ props.setTextValue }
        value={ props.commentText }
      />
      <button
        className='add-comment' 
        onClick={props.addNewComment}
      >
        Отправить
      </button>
    </React.Fragment>
  )
}

export default CreateNewComment;