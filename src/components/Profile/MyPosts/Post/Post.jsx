import React from 'react';
import Styles from './Post.module.css'
import Avatar from './img/skull.svg'

const Post = (props) => {
  return (<div className={Styles.item}>
    <img src={Avatar} className="header_logo" alt="logo"/>{props.message}
  </div>
  )
}


export default Post;