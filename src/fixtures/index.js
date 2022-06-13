const FILTERS_INITIAL_STATE = {
  categories: [],
  brands: [],
};
const INITIAL_STATE_PAGINATION = {
  currentPage: 1,
};
const NUMBER_OF_PRODUCTS_ONE_PAGE = 9
const PRODUCTS_INITIAL_STATE = {
  products: [],
  numberOfProducts: 0,
  cartProducts: JSON.parse(localStorage.getItem("cart")) || [],
};
const SEARCH_INITIAL_STATE = "";
const SLIDERS_INITIAL_STATE = {
  price: {
    id: 1,
    type: "price",
    min: 0,
    max: 100000,
    currentMin: 0,
    currentMax: 100000,
    step: 100,
    fraction: 0,
  },
  rating: {
    id: 2,
    type: "rating",
    min: 0,
    max: 5,
    currentMin: 0,
    currentMax: 5,
    step: 0.5,
    fraction: 2,
  },
};

const URL_SEARCH = new URL("http://localhost:5000/search");
const URL_WISHLIST = new URL("http://localhost:5000/wish-products");
const URL_PRODUCTS = new URL("http://localhost:5000/products");
const URL_CATEGORIES = new URL("http://localhost:5000/categories");
const URL_BRANDS = new URL("http://localhost:5000/brands");

export {
  FILTERS_INITIAL_STATE,
  INITIAL_STATE_PAGINATION,
  PRODUCTS_INITIAL_STATE,
  SLIDERS_INITIAL_STATE,
  URL_PRODUCTS,
  URL_CATEGORIES,
  SEARCH_INITIAL_STATE,
  URL_BRANDS,
  URL_SEARCH,
  URL_WISHLIST,
  NUMBER_OF_PRODUCTS_ONE_PAGE
};
