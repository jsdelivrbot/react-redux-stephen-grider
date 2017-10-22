import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    // posts[this.props.match.params.id]; //the post we want to show
    return (
      <div>Posts Show Component</div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) { //ownProps would be this.props
  return { post: posts[ownProps.match.params.id] }; //the post we want to show
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
