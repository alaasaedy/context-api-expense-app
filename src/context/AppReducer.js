export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return [...state, action.payload];

    case 'DELETE_TRANSACTION':
      return state.filter((transaction) => transaction.id !== action.payload);

    default:
      return state;
  }
};
