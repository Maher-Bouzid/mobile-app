const productsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return state;
    default:
      return state;
  }
};
export default productsReducer;
