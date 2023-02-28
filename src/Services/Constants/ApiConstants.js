const BaseUrl = "https://localhost:7121/api/auth/";

export const AuthApi = {
  LoginUser: BaseUrl + "user/login",
  RegisterUser: BaseUrl + "user/register",
  ValidateToken: BaseUrl + "token/validate",
};
