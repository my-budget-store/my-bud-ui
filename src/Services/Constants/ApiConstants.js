const BaseUrl = "https://localhost:7101";

export const AuthApi = {
  LoginUser: BaseUrl + "/mybud/user/login",
  RegisterUser: BaseUrl + "/mybud/user/register",
  ValidateToken: BaseUrl + "/mybud/validate",
};

export const ProductApi = {
  Products: BaseUrl + "/mybud/products",
};
