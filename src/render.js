import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost } from './redux/state';
import { BrowserRouter } from "react-router-dom";

export let renderEntireTree = (state) => {
  const base = process.env.NODE_ENV === 'development' ? '' : 'react_test'
  
  ReactDOM.render(
    <BrowserRouter basename={base}>
      <App state={state} addPost={addPost} />
    </BrowserRouter>,
    document.getElementById('root'));
}