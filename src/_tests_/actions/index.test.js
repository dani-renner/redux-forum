import * as actions from './../../actions';
import * as c from "./../../actions/ActionTypes";

describe('forum actions', () => {
  it('deleteComment should create DELETE_COMMENT action', () => {
    expect(actions.deleteComment(1)).toEqual({
      type: c.DELETE_COMMENT,
      id: 1
    });
  });
  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });
  it('addComment should create ADD_COMMENT action', () => {
    expect(actions.addComment({
      userName: "TruckerJoe",
      textInput: "My wife got me a new fishing pole",
      id: 1
    })).toEqual({
      type: c.ADD_COMMENT,
      userName: "TruckerJoe",
      textInput: "My wife got me a new fishing pole",
      id: 1
    });
  });
});