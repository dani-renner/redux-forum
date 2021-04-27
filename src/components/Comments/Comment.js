import React from "react";
import PropTypes from 'prop-types';

function Comment(props) {
  return (
    <React.Fragment>
      <hr />
      <h1><i>COMMENT</i></h1>
      <hr />
      <h2>userName</h2>
      <h2>textInput</h2>
      <h3>counter</h3>
      <h3>TimeStamp</h3>
      <button>UpVote</button>
      <button>DownVote</button>
      <hr />
    </React.Fragment>
  );
}

Comment.propTypes = {
  userName: PropTypes.string.isRequired,
  textInput: PropTypes.string.isRequired,

}

export default Comment;