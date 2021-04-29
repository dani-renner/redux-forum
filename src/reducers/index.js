import { combineReducers } from 'redux';
import formVisibleReducer from './form-visible-reducer';
import commentListReducer from './comment-list-reducer';
import postListReducer from "./post-list-reducer";

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterCommentList: commentListReducer,
  masterPostList: postListReducer,
});

export default rootReducer;

// INSERT NEW KEY-VALUE FOR FORM-VISIBLE-REDUCER TO SWITCH FORM VISIBILITY FOR COMMENTS IN POST DETAIL USING FUNCTIONAL COMPONENT. 
