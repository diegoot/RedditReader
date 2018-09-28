import React from 'react';
import PostsPage from 'components/container/PostsPage';
import redditLogo from 'images/reddit-logo.png';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <p>Reddit</p>
          <img src={redditLogo} alt="logo" className="app__logo"/>
          <p>Reader</p>
        </header>
        <PostsPage/>
      </div>
    );
  }
}

export default App;
