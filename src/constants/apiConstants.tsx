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
  Products: BaseUrl + "/mybud/products",
};

export const FilterApi = {
  Filters: "https://localhost:7103/mybud/filters",
  // Filters: BaseUrl + "/mybud/filters",
};
