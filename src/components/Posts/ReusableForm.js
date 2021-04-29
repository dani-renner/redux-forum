import React from 'react';
import PropTypes from 'prop-types';

function ReusablePostForm(props) {
  let currentTime = Date.now().toString()
  // let now = currentTime.now().toString();


  return (
    <React.Fragment>
      <hr />
      <h1><i>NEW POST FORM</i></h1>
      <hr />
      <form onSubmit={props.postFormSubmissionHandler} >
        <input
          type="text"
          name="title"
          placeholder="Title"
        />
        <input
          type="text"
          name="userName"
          placeholder="User Name"
        />
        <textarea
          // type="text"
          name="textInput"
          placeholder="input text here"
        />
        <input
          type="hidden"
          name="counter"
          value="1"
        />
        <input
          type="hidden"
          name="timeStamp"
          value={currentTime}
        />
        <button type="submit">Submit</button>
      </form>
      <hr />
    </React.Fragment>
  );
};

ReusablePostForm.propTypes = {
  postFormSubmissionHandler: PropTypes.func
}
export default ReusablePostForm;