import { AuthApi } from "Constants/ApiConstants";
import {
  getCookie,
  setCookie,
  removeCookie,
  HttpRequest,
} from "Shared/Helpers";

const AuthService = {
  ValidateUserToken: () => {
    const token = getCookie("token");
    if (token) {
      return HttpRequest(AuthApi.ValidateToken)
        .postWithParams({
          params: {
            token,
          },
        })
        .then((response) => {
          if (response.data) {
            return true;
          } else {
            return false;
          }
        });
    }
    return false;
  },

  Login: async (username: string, password: string) => {
    return await HttpRequest(AuthApi.LoginUser)
      .post({
        username,
        password,
      })
      .then((response) => {
        if (response.data) {
          setCookie("token", response.data.token);
          return true;
        } else {
          return false;
        }
      });
  },

  Logout: () => {
    removeCookie("token");
  },

  Register: (username: string, email: string, password: string) => {
    return HttpRequest(AuthApi.RegisterUser).post({
      username,
      email,
      password,
    });
  },
};

export default AuthService;
