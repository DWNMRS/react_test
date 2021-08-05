import {renderEntireTree} from "../render";

let state = {
  dialogsPage: {
    dialogs: [
      { name: 'User1', id: 1 },
      { name: 'User2', id: 2 },
      { name: 'User3', id: 3 },
      { name: 'User4', id: 4 },
      { name: 'User5', id: 5 },
      { name: 'User6', id: 6 },
    ],

    messages: [
      { message: 'message-1', id: 1 },
      { message: 'message-2', id: 2 },
      { message: 'message-3', id: 3 },
      { message: 'message-4', id: 4 },
      { message: 'message-5', id: 5 },
      { message: 'message-6', id: 6 },
    ],
  },

  profilePage: {
    posts: [
      { message: "it's my second post", id: 1, likesCount: 12 },
      { message: "it's my first post", id: 2, likesCount: 11 },
    ]
  },

  sidebar: {

  }

}

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };
  state.profilePage.posts.unshift(newPost);
  renderEntireTree (state);
}

export default state;