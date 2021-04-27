
export default (state = {}, action) => {
  const { userName, textInput, id, } = action;
  switch (action.type) {
    case 'ADD_COMMENT':
      return Object.assign({}, state, {
        [id]: {
          userName: userName,
          textInput: textInput,
          count: 0,
          id: id
        }
      });
    case "INCREMENT":
      return {
        userName: userName,
        textInput: textInput,
        counter: state.counter + 1,
        id: id
      }
    case "DECREMENT":
      return {
        userName: userName,
        textInput: textInput,
        counter: state.counter - 1,
        id: id
      }
    case "DELETE_COMMENT":
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};