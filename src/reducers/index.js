import { combineReducers } from 'redux';
import formVisibleReducer from './form-visible-reducer';
import commentListReducer from './comment-list-reducer';
import commentsVisible from "./comment-visible-reducer";

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterCommentList: commentListReducer,
  // commentsVisible: commentsVisible,
});

export default rootReducer;

// INSERT NEW KEY-VALUE FOR FORM-VISIBLE-REDUCER TO SWITCH FORM VISIBILITY FOR COMMENTS IN POST DETAIL USING FUNCTIONAL COMPONENT. 
