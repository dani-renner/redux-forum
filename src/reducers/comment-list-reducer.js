import * as c from "./../actions/ActionTypes";

export default (state = {}, action) => {
  const { userName, textInput, id, counter } = action;
  switch (action.type) {
    case c.ADD_COMMENT:
      return Object.assign({}, state, {
        [id]: {
          userName: userName,
          textInput: textInput,
          counter: counter,
          id: id
        }
      });
    // case c.INCREMENT:
    //   let upvote = { ...state };
    //   upvote[id].counter++
    //   return upvote;
    // case c.DECREMENT:
    //   return {
    //     userName: userName,
    //     textInput: textInput,
    //     counter: state.counter - 1,
    //     id: id
    //   }
    case c.DELETE_COMMENT:
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};