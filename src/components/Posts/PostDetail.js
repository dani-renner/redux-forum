import React from "react";
import PropTypes from "prop-types";
import CommentList from "../Comments/CommentList";

function PostDetail(props) {
  const { post, onUpvote } = props;

  return (
    <React.Fragment>
      <hr />
      <h1><i>POST DETAIL</i></h1>
      <hr />
      <h1>{post.title}</h1>
      <h2>{post.userName}</h2>
      <h2>{post.textInput}</h2>
      <h3>{post.counter}</h3>
      <h3>{post.timeStamp}</h3>
      <button onClick={() => onUpvote(post.id)}>UpVote</button>
      <button>DownVote</button>
      <hr />
      <CommentList />

    </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onUpvote: PropTypes.func
};

export default PostDetail;