import React from 'react';
import Style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';


const Profile = (props) => {
  return (
    <div className={Style.wall}>
      <ProfileInfo/>
      <MyPosts posts={props.state.posts} addPost={props.addPost} />
    </div>
  )

}


export default Profile;