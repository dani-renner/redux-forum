import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableCommentForm from './ReusableCommentForm';



function NewCommentForm(props) {

  return (
    <React.Fragment>
      <ReusableCommentForm />
    </React.Fragment>
  );
}


NewCommentForm.propTypes = {

};

export default NewCommentForm;