import ReusableForm from "../ReuseableForm";
import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewPostForm(props) {


  return (
    <React.Fragment>
      <hr />
      <h1><i>NEW POST FORM</i></h1>
      <hr />
      <form >
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
        <input
          type="textBox"
          name="textInput"
          placeholder="Post Body"
        />
        <input
          type="hidden"
          name="counter"
          value="0"
        />
        <input
          type="hidden"
          name="timeStamp"
          value={new Date()}
        />
        <button type="submit">Submit</button>
      </form>
      <hr />
    </React.Fragment>
  )
}

NewPostForm.propTypes = {

};

export default NewPostForm;