import React from "react";
import PropTypes from "prop-types";
import PostDetail from "./PostDetail";
import NewCommentForm from "../Comments/NewCommentForm";
import { useSelector, useDispatch } from "react-redux";


function Post(props) {
  // const month = props.timeStamp.toLocaleString("en-US", { month: "short" });
  // const day = props.timeStamp.toLocaleString("en-US", { day: "2-digit" });
  // const year = props.timeStamp.getFullYear();
  // const timeStamp = `${month}/${day}/${year}`;
  return (
    <React.Fragment>
      <div onClick={() => props.whenPostClicked(props.id)}>
        <h3>{props.title} - {props.counter} - {props.timeStamp}</h3>
        <h4>{props.userName}</h4>
        <p>{props.textInput}</p>
      </div>
    </React.Fragment>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  textInput: PropTypes.string.isRequired,
  counter: PropTypes.number,
  timeStamp: PropTypes.number,
  id: PropTypes.string,
}

export default Post;