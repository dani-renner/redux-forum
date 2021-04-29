import React from "react";
import PostList from "../components/Posts/PostList";
import PostDetail from './../components/Posts/PostDetail';
import NewPostForm from "./Posts/NewPostForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as c from "./../actions/ActionTypes";
import * as a from "./../actions";
import { act } from "react-dom/test-utils";
import NewCommentForm from "./Comments/NewCommentForm";
// import ReusableForm from "./ReuseableForm";

class ForumControl extends React.Component {
  // constructor and methods go here
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      selectedPost: null,
    }
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        selectedPost: null,
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleNewCommentClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleCommentAddForm();
    this.setState({
      selectedPost: null,

    })
    dispatch(action);
  }


  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    // const { title, userName, inputText, counter, timeStamp, id } = newPost
    const action = a.addPost(newPost);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.masterPostList[id];
    this.setState({ selectedPost: selectedPost });
  }

  handleUpvotingPost = (id) => {
    const { dispatch } = this.props;
    const action = a.increment(id);
    dispatch(action);
    if (this.setState.selectedPost != null) {
      this.setState({ selectedPost: this.props.masterPostList[id] })
    } else {
      this.setState.selectedPost = null;
    }
  }
  handleDownvotingPost = (id) => {
    const { dispatch } = this.props;
    const action = a.decrement(id);
    dispatch(action);
    if (this.setState.selectedPost != null) {
      this.setState({ selectedPost: this.props.masterPostList[id] })
    } else {
      this.setState.selectedPost = null;
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm onNewPostCreation={this.handleAddingNewPostToList} />
      buttonText = "return to post list"
    } else if (this.props.commentFormVisibleOnPage) {
      currentlyVisibleState = <NewCommentForm />
      buttonText = "return to post"
    } else if (this.state.selectedPost != null) {
      currentlyVisibleState = <PostDetail onClickAddComment={this.handleNewCommentClick}
        onUpvote={this.handleUpvotingPost} onDownvote={this.handleDownvotingPost} post={this.state.selectedPost} />
      buttonText = "return to post list"
    } else {
      currentlyVisibleState = <PostList postList={this.props.masterPostList} onPostSelection={this.handleChangingSelectedPost} />
      buttonText = "add post"
    }
    return (
      // returning whichever view is selected goes here
      <React.Fragment>
        {currentlyVisibleState}

        {/* <NewCommentForm /> */}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

ForumControl.propTypes = {
  masterPostList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  commentFormVisibleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage,
    commentFormVisibleOnPage: state.commentFormVisibleOnPage,
    masterPostList: state.masterPostList
  }
}

ForumControl = connect(mapStateToProps)(ForumControl);

export default ForumControl;