import React from 'react';
import PropTypes from 'prop-types';
import ThumnailPost from './ThumnailPost';
import PostDetails from './PostDetails';
import {MAX_MOBILE_RESOLUTION} from 'utils/constants';
import './PostsPageLayout.css';

class PostPageLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPostId: null,
      isMobile: false,
    };

    this.setSelectedPost = this.setSelectedPost.bind(this);
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    this.handleWindowSizeChange();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange() {
    this.setState({ isMobile: window.innerWidth <= MAX_MOBILE_RESOLUTION });
  }

  setSelectedPost(postId) {
    this.setState({
      selectedPostId: postId,
    });
  }

  render() {
    const {posts} = this.props;
    const {selectedPostId, isMobile} = this.state;
    let postDetails = null;

    if (selectedPostId) {
      const post = posts.find(post => post.data.id === selectedPostId);
      postDetails = <PostDetails data={post.data}/>
    }
    else {
      postDetails = (
        <p className="posts__details--noPost">
          Select a post from the left to see its details.
        </p>
      );
    }

    return (
      <section className="postsPageLayout">
        <section className="postsPageLayout__list">
            {posts && posts.map(post => {
              return (
                <React.Fragment key={post.data.id}>
                  <ThumnailPost data={post.data} onClick={this.setSelectedPost}/>
                  {isMobile && post.data.id === selectedPostId && postDetails}
                </React.Fragment>
              )
            })}
        </section>
        {!isMobile &&
          <section className="postsPageLayout__details">
            {postDetails}
          </section>
        }
      </section>
    );
  }
};

PostPageLayout.propTypes = {
  posts: PropTypes.array,
};

export default PostPageLayout;