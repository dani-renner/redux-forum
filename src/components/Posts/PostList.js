import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props) {

  return (
    <React.Fragment>
      {/* <hr /> */}
      <h1><i>POST LIST</i></h1>
      <hr></hr>
      {Object.values(props.postList).map((post) =>
        <Post
          whenPostClicked={props.onPostSelection}
          title={post.title}
          userName={post.userName}
          textInput={post.textInput}
          counter={post.counter}
          timestamp={post.timeStamp}
          id={post.id}
          key={post.id}
        />
      )}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func
};

export default PostList;