import React, {Component} from 'react';
import CommentsList from '../Comments-list/CommentsList';
import CreateNewComment from '../Create-comment/CreateNewComment';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: this.getComments(),
      author: '',
      text: ''
    }
  }

  getComments = () => {
    try {
      return localStorage.getItem('comments').split('$_').map(el => JSON.parse(el));
    } catch(e) {
      console.log(e);
      return [];
    }
  }

  addNewComment = () => {
    const name = this.state.author;
    const text = this.state.text;
    const date = `${new Date().toLocaleDateString()}/${new Date().toLocaleTimeString()}`;
    const comments = this.state.comments;

    comments.push({name, text, date});
    this.setState({comments, author: '', text: ''});
  }

  
  deleteComment = (index) => {
    const comments = [...this.state.comments];

    comments.splice(index, 1);
    this.setState({comments});
  }

  //не доходит, как сделать из этого одну функцию:
  setNameValue = ev => this.setState( {author: ev.target.value} );
  setTextValue = ev => this.setState( {text: ev.target.value} );

  componentDidUpdate() {
    const storage = this.state.comments.map(el => JSON.stringify(el)).join('$_');

    localStorage.setItem('comments', storage);
  }

  render() {
    return (
      <div className='vidget'>
        <CommentsList 
          comments={this.state.comments}
          deleteComment={this.deleteComment}
        />
        <CreateNewComment
          setNameValue={this.setNameValue}
          setTextValue={this.setTextValue}
          authorName={this.state.author}
          commentText={this.state.text}
          addNewComment={this.addNewComment}
        />
      </div>
    );
  }
}

export default App;
