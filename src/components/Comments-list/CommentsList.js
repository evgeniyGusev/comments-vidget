import React from 'react';
import Comment from '../Comment/Comment';
import './CommentList.css';

const CommentsList = (props) => {
  return (
    <ul className='comments-list'>
      {
        props.comments.length === 0 ? <div className='null-list'>Комментариев пока нет...</div>
        :
        props.comments.map((el, index) => {
          const name = el.name;
          const text = el.text;
          const date = el.date;

          return (
            <Comment
              name={name}
              text={text}
              key={index}
              date={date}
              delete={ () => props.deleteComment(index) } />
          )
        })
      }
    </ul>
  )
}

export default CommentsList;