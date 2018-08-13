import React from 'react';
import PropTypes from 'prop-types';
import ThumnailPost from './ThumnailPost';
import PostDetails from './PostDetails';
import './PostsPage.css';

class PostPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {details: <p className="posts__details--noPost">Select a post from the left to see its details.</p>};

    this.fillInDetails = this.fillInDetails.bind(this);
  }

  fillInDetails(postData) {
    this.setState({details: <PostDetails data={postData} />});
  }

  render() {
    const {posts} = this.props;
    const {details} = this.state;

    return (
      <section className="posts">
        <section className="posts__list">
            {posts && posts.map(post => {
              return <ThumnailPost key={post.data.id} data={post.data} onClick={this.fillInDetails} />;
            })}
        </section>
        <section className="posts__details">
          {details}
        </section>
      </section>
    );
  }
};

PostPage.propTypes = {
  posts: PropTypes.array,
};

export default PostPage;