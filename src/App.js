import React from 'react';
import './App.css';
import './reset.css';
import Header from './components/Header/Header';
import MainMenu from './components/MainMenu/MainMenu';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';

const App = (props) => {
  return (
    <div className="page">
      <Header />
      <MainMenu />
      <div className="content">
        <Route path='/profile' render={() =>
          <Profile state={props.state.profilePage} addPost={props.addPost} />} />
        <Route path='/dialogs' render={() =>
          <Dialogs state={props.state.dialogsPage} />} />
      </div>
    </div>
  );
}


export default App;
