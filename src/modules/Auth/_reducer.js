const initialState = {
  counter: 0,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return { counter: state.counter + 1 };
    default:
      return state;
  }
};

export default auth;
