const BaseUrl = "https://localhost:7101";

export const productApi = {
  Products: BaseUrl + "/products",
};

export const productFiltersApi = {
  searchFilters: BaseUrl + "/searchFilters",
  categories: BaseUrl + "/categories",
};

export const cartApi = {
  Cart: BaseUrl + "/cart",
  createCartItems: BaseUrl + "/cart/addItems",
};

export const ordersApi = {
  createOrder: BaseUrl + "/orders",
  orders: BaseUrl + "/orders",
};
