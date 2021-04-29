import ReusablePostForm from "./ReusableForm";
import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewPostForm(props) {

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation(
      {
        title: event.target.title.value,
        userName: event.target.userName.value,
        textInput: event.target.textInput.value,
        counter: event.target.counter.value,
        timeStamp: event.target.timeStamp.value,
        id: v4()

      });
    console.log()
  }

  return (
    <ReusablePostForm postFormSubmissionHandler={handleNewPostFormSubmission} />
  )
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;