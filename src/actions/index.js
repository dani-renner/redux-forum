import * as c from "./ActionTypes";

export const deleteComment = id => ({
  type: c.DELETE_COMMENT,
  id
});
export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});
export const addComment = (comment) => {
  const { userName, textInput, id } = comment;
  return {
    type: c.ADD_COMMENT,
    userName: userName,
    textInput: textInput,
    id: id
  }
};
export const increment = (id) => ({
  type: c.INCREMENT,
  id
});

export const decrement = (id) => ({
  type: c.DECREMENT,
  id
});