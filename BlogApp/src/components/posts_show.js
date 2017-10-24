import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {

  componentDidMount() {
    if(!this.props.post) { //if there is no post, go ahead and fetch it
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
    }
  }

  handleDeletePost() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    // posts[this.props.match.params.id]; //the post we want to show
    const { post } = this.props;

    if(!post) {
      return (<div>Loading...</div>);
    }

    return (
      <div>
        <Link className="btn btn-primary" to="/">Back To Index</Link>
        <button
          className="btn btn-danger xs-pull-right"
          onClick={this.handleDeletePost.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) { //ownProps would be this.props
  return { post: posts[ownProps.match.params.id] }; //the post we want to show
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
