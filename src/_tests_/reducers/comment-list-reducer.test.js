import commentListReducer from '../../reducers/comment-list-reducer';

describe('commentListReducer', () => {
  const currentState = {
    1: {
      userName: 'TruckerJoe',
      textInput: 'I saw some ducks cross the road',
      id: 1
    },
    2: {
      userName: 'TruckerJill',
      textInput: 'I love ducks',
      id: 2
    }
  }
  const commentData = {
    userName: 'TruckerJoe',
    textInput: 'I saw some ducks cross the road',
    id: 1
  };

  const counterState = {
    userName: 'TruckerJoe',
    textInput: 'I saw some ducks cross the road',
    counter: 0,
    id: 1
  }


  let action;
  test('Should return default state if no action passed in', () => {
    expect(commentListReducer({}, { type: null })).toEqual({});
  });
  test('should successfully add a comment to master comment list', () => {
    const { userName, textInput, id } = commentData;
    action = {
      type: 'ADD_COMMENT',
      userName: userName,
      textInput: textInput,
      id: id
    };
    expect(commentListReducer({}, action)).toEqual({
      [id]: {
        userName: userName,
        textInput: textInput,
        count: 0,
        id: id
      }
    });
  });

  test('Should increase count by 1', () => {
    const { userName, textInput, id, counter } = counterState;
    action = {
      type: "INCREMENT",
      userName: userName,
      textInput: textInput,
      counter: counter,
      id: id
    };
    expect(commentListReducer(counterState, action)).toEqual({
      userName: userName,
      textInput: textInput,
      counter: 1,
      id: id
    });
  });

  test('Should decrease count by 1', () => {
    const { userName, textInput, id, counter } = counterState
    action = {
      type: "DECREMENT",
      userName: userName,
      textInput: textInput,
      counter: counter,
      id: id
    };
    expect(commentListReducer(counterState, action)).toEqual({
      userName: userName,
      textInput: textInput,
      counter: -1,
      id: id
    });
  });

  test('Should successfully delete comment', () => {
    action = {
      type: "DELETE_COMMENT",
      id: 1
    };
    expect(commentListReducer(currentState, action)).toEqual({
      2: {
        userName: 'TruckerJill',
        textInput: 'I love ducks',
        id: 2
      }
    });
  });
});
