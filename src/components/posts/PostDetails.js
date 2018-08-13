import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './PostDetails.css';

const PostDetails = ({data}) => {
  const postDate = moment(data.created*1000);

  return (
    <article className="postDetails">
      <span className="postDetails__extraInfo">Posted by {data.author} {postDate.fromNow()} - {data.ups} <i className="fas fa-thumbs-up"></i></span>
      <h1 className="postDetails__title"><a href={`https://www.reddit.com${data.permalink}`}>{data.title}</a></h1>
      <img className="postDetails__image" src={data.preview.images[0].source.url} alt="full size" />
    </article>
  );
};

PostDetails.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PostDetails;