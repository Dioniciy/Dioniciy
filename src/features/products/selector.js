export const selectProducts = (productsType) => (state) => {
  switch (productsType) {
    case "cart":
      return state.products.cartProducts;
    case "numberOfProducts":
      return state.products.numberOfProducts;
    default:
      return state.products.products;
  }
};
