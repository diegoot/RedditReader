import React from 'react';
import PostsPageContainer from 'containers/posts/PostsPageContainer';
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
        <PostsPageContainer/>
      </div>
    );
  }
}

export default App;
