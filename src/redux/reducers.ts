const initialState = {
  score: 0,
};

const todoListReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return { score: state.score + action.score };
    case "DECREMENT":
      return { score: state.score - action.score };
    default:
      return state;
  }
};

export default todoListReducer;
