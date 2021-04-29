import React from "react";
import PropTypes from "prop-types";
import CommentList from "../Comments/CommentList";
import NewCommentForm from "../Comments/NewCommentForm";

function PostDetail(props) {
  const { post, onUpvote, onDownvote, onClickAddComment } = props;

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
      <button onClick={() => onDownvote(post.id)}>DownVote</button>
      <button onClick={() => onClickAddComment()}>add Comment</button>
      <hr />
      <CommentList />
    </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onUpvote: PropTypes.func,
  onDownvote: PropTypes.func,
  onClickAddComment: PropTypes.func
};

export default PostDetail;