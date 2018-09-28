import React from 'react';
import PostsPageLayout from 'components/presentational/PostsPageLayout';
import {POSTS_LIMIT} from 'utils/constants';

export default class PostsPage extends React.Component {
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
      .catch(() => {
        this.setState({isError: true, errorMessage: 'There was an error reading posts'});
      });
  }

  render() {
    const {isError, errorMessage, posts} = this.state;

    if (isError) {
      return <div>{errorMessage}</div>
    }
    return <PostsPageLayout posts={posts} />;
  }
}