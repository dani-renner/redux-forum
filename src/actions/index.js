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
  id: id
});

export const decrement = (id) => ({
  type: c.DECREMENT,
  id
});

export const addPost = (post) => {
  const { title, userName, textInput, counter, id } = post;
  return {
    type: c.ADD_POST,
    title,
    userName,
    textInput,
    counter,
    id,
  }
};

export const deletePost = (id) => ({
  type: c.DELETE_POST,
  id
})