import React from 'react';
import Style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef ();

  let addPost =() => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value=' ';

  }
  return (
    <div className={Style.container}>
      <h3>My posts</h3>
      <div className= {Style.addPost}>
        <div>
          <textarea ref={newPostElement} className={Style.textarea}></textarea>
        </div>
        <div>
          <button onClick={addPost} className={Style.btn_public}>Post</button>
        </div>
      </div>
      {postsElement}
    </div>
  )
}


export default MyPosts;