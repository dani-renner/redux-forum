export default (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_COMMENT_FORM':
      return !state;
    default:
      return state;
  }
};