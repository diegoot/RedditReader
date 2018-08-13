import React from 'react';
import PostsPage from 'components/posts/PostsPage';
import {POSTS_LIMIT} from 'utils/constants';

export default class PostsPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
      isError: false,
      errorMessage: null,
    };
  }

  componentDidMount() {
    return fetch(`https://www.reddit.com/r/funny/top.json?limit=${POSTS_LIMIT}`)
      .then(function(response) {
        if (response.ok) {
          return response.json();
        }
        else {
          throw new Error('Error reading posts!!');
        }
      })
      .then((json) => {
        this.setState({posts: json.data.children});
      })
      .catch((e) => {
        console.error(e);
        this.setState({isError: true, errorMessage: e});
      });
  }

  render() {
    return <PostsPage posts={this.state.posts} />;
  }
}