import React from "react";

function ReusableCommentForm(props) {
  return (
    <React.Fragment>
      <hr />
      <h1><i>NEW COMMENT FORM</i></h1>
      <hr />
      <form>
        <input
          type="text"
          name="userName"
          placeholder="User Name"
        />
        <input
          type="textBox"
          name="textInput"
          placeholder="Comment Body"
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
  );
};

export default ReusableCommentForm;