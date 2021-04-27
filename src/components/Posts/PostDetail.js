import React from "react";
import PropTypes from "prop-types";
import CommentList from "../Comments/CommentList";

function PostDetail() {


  return (
    <React.Fragment>
      <hr />
      <h1><i>POST DETAIL</i></h1>
      <hr />
      <h1>Title</h1>
      <h2>userName</h2>
      <h2>textInput</h2>
      <h3>counter</h3>
      <h3>TimeStamp</h3>
      <button>UpVote</button>
      <button>DownVote</button>
      <hr />
      <CommentList />

    </React.Fragment>
  )
}

PostDetail.propTypes = {

};

export default PostDetail;