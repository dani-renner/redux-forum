import rootReducer from "../../reducers/index";
import { createStore } from "redux";
import formVisibleReducer from "../../reducers/form-visible-reducer";
import commentListReducer from "../../reducers/comment-list-reducer";
import * as c from "./../../actions/ActionTypes";

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test("Should return default state if no action type is recognized", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterCommentList: {},
      formVisibleOnPage: false
    });
  });

  test("Check that initial state of commentListReducer matches root reducer", () => {
    expect(store.getState().masterCommentList).toEqual(commentListReducer(undefined, { type: null }));
  });

  test("Check that initial state of commentListReducer matches root reducer", () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test("Check that ADD_COMMENT action works for commentListReducer and root reducer", () => {
    const action = {
      type: c.ADD_COMMENT,
      userName: "userName",
      textInput: "textInput",
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterCommentList).toEqual(commentListReducer(undefined, action));
  });

  test("Check that TOGGLE_FORM action works for formVisibleReducer and root reducer", () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });


})