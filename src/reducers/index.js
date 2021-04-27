import { combineReducers } from 'redux';
import formVisibleReducer from './form-visible-reducer';
import commentListReducer from './comment-list-reducer';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterCommentList: commentListReducer
});

export default rootReducer;