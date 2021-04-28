import React from "react";
import PropTypes from "prop-types";
import PostDetail from "./PostDetail";
import NewCommentForm from "../Comments/NewCommentForm";
import { useSelector, useDispatch } from "react-redux";


function Post() {
  const dispatch = useDispatch();

  const show = useSelector(state => state.commentVisibility)
  const toggleNewFormHandler = () => {
    dispatch({ type: "TOGGLE_COMMENT" })
  }


  return (
    <React.Fragment>
      <hr />
      <h1><i>POST</i></h1>
      <hr />
      <h1>Title</h1>
      <h4>Count</h4>
      <hr />
      <button onClick={toggleNewFormHandler}>TOGGLE</button>
      {show && <PostDetail />}
      <NewCommentForm />
    </React.Fragment>
  )
}

export default Post;