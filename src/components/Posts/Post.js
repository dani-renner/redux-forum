import React from "react";
import PropTypes from "prop-types";
import PostDetail from "./PostDetail";

function Post() {



  return (
    <React.Fragment>
      <hr />
      <h1>Title</h1>
      <h4>Count</h4>
      <hr />
      <PostDetail />
    </React.Fragment>
  )
}

export default Post;