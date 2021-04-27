import React from "react";
import PostList from "../components/Posts/PostList";
import NewPostForm from "./Posts/NewPostForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import ReusableForm from "./ReuseableForm";

class ForumControl extends React.Component {
  // constructor and methods go here
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    const { dispatch } = this.props;
    const action = {
      type: "TOGGLE_FORM"
    }
    dispatch(action);
  }

  render() {
    let currentlyVisibleState = null;
    if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm />
    } else {
      currentlyVisibleState = <PostList />
    }
    return (
      // returning whichever view is selected goes here
      <React.Fragment>
        {currentlyVisibleState}

        {/* <NewCommentForm /> */}
        <button onClick={this.handleClick}>TOGGLE STATE</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage
  }
}

ForumControl = connect(mapStateToProps)(ForumControl);

export default ForumControl;