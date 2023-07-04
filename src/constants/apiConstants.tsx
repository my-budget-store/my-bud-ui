export const IdentityConstants = {
  clientId: "mybud",
  code: "code",
  identityServerApi: "https://localhost:7121",
  redirectUri: window.location.origin + window.location.pathname,
  postLogoutRedirectUri: "http://localhost:3000",
  scopes: "openid profile products.api",
};

const BaseUrl = "https://localhost:7101";

export const ProductApi = {
  Products: BaseUrl + "/products/products",
};

export const FilterApi = {
  Filters: BaseUrl + "/filters/filter",
};
