import * as c from "./../actions/ActionTypes";

export default (state = {}, action) => {
  const { title, userName, textInput, counter, timeStamp, id, } = action;
  switch (action.type) {
    case c.ADD_POST:
      return Object.assign({}, state, {
        [id]: {
          title,
          userName,
          textInput,
          counter,
          timeStamp,
          id
        }
      });
    case c.INCREMENT:
      let upvote = { ...state };
      upvote[id].counter++
      return upvote;
    case c.DELETE_POST:
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};