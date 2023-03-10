const BaseUrl = "https://localhost:7101";

export const AuthApi = {
  LoginUser: BaseUrl + "/auth/user/login",
  RegisterUser: BaseUrl + "/auth/user/register",
  ValidateToken: BaseUrl + "/authtoken/validate",
};

export const ProductApi = {
  Products: BaseUrl + "/products",
};
