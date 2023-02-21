import axios from "axios";
import { AuthApi } from "Constants/ApiConstants";
import { getCookie, setCookie } from "Shared/CookieHelper";
import Cookies from "js-cookie";
import AxiosHelper from "Shared/AxiosHelper";

const AuthService = {
  ValidateUserToken: () => {
    const token = getCookie("token");
    if (token) {
      return AxiosHelper.createApiEndpoint(
        AuthApi.BaseUrl,
        AuthApi.Endpoint.TokenValidate
      )
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
    return await AxiosHelper.createApiEndpoint(
      AuthApi.BaseUrl,
      AuthApi.Endpoint.UserLogin
    )
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
    Cookies.remove("token");
  },

  Register: (username: string, email: string, password: string) => {
    return axios.post(AuthApi.BaseUrl + "signup", {
      username,
      email,
      password,
    });
  },

  GetCurrentUser: () => {
    if (Cookies.get("token")) {
      return Cookies.get("token");
    } else {
      return undefined;
    }
  },
};

export default AuthService;
