import React from 'react';
import moment from 'moment';
import PostDetails from './PostDetails';
import PropTypes from 'prop-types';
import {MAX_MOBILE_RESOLUTION} from 'utils/constants';
import './ThumnailPost.css';

class ThumnailPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMoreDetailsVisible: false,
      width: null,
    };

    this.handleClick = this.handleClick.bind(this);
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
    this.setState({ width: window.innerWidth });
  }

  handleClick() {
    const {width} = this.state;
    const {data, onClick} = this.props;

    if (width <= MAX_MOBILE_RESOLUTION) {
      this.setState({isMoreDetailsVisible: !this.state.isMoreDetailsVisible});
    }
    else {
      onClick(data);
    }
  }

  render () {
    const {isMoreDetailsVisible} = this.state;
    const {data} = this.props;
    const postDate = moment(data.created*1000);

    return (
      <React.Fragment>
        <article className="post" onClick={this.handleClick}>
          <img className="post__thumbnail" src={data.thumbnail} alt="thumbnail" />
          <div className="post__details">
            <span className="post__author">By <span className="post__author--name">{data.author}</span></span>
            <span className="post__date">{postDate.fromNow()}</span>
            <span className="post__title">{data.title}</span>
            <span className="post__comments">{data.num_comments} comments</span>
          </div>
        </article>
        <article className="post__moreDetails">
          {isMoreDetailsVisible && <PostDetails data={data} />}
        </article>
      </React.Fragment>
    );
  }
};

ThumnailPost.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ThumnailPost;