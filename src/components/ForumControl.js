import React from "react";
import PostList from "../components/Posts/PostList";
import NewPostForm from "./Posts/NewPostForm";
import NewCommentForm from "./Comments/NewCommentForm";

import PropTypes from "prop-types";
// import ReusableForm from "./ReuseableForm";

class ForumControl extends React.Component {
  // constructor and methods go here
  render() {
    // logic for displaying current view goes here
    return (
      // returning whichever view is selected goes here
      <React.Fragment>
        <PostList />
        <NewPostForm />
        <NewCommentForm />
      </React.Fragment>
    )
  }
}
export default ForumControl;