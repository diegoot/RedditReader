import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './ThumnailPost.css';

class ThumnailPost extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {data, onClick} = this.props;

    onClick(data.id);
  }

  render () {
    const {data} = this.props;
    const postDate = moment(data.created*1000);

    return (
      <article className="thumbnailPost" onClick={this.handleClick}>
        <img className="thumbnailPost__thumbnail" src={data.thumbnail} alt="thumbnail" />
        <div className="thumbnailPost__details">
          <span className="thumbnailPost__author">By <span className="thumbnailPost__author--name">{data.author}</span></span>
          <span className="thumbnailPost__date">{postDate.fromNow()}</span>
          <span className="thumbnailPost__title">{data.title}</span>
          <span className="thumbnailPost__comments">{data.num_comments} comments</span>
        </div>
      </article>
    );
  }
};

ThumnailPost.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ThumnailPost;