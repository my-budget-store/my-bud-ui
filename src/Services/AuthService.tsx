import axios from "axios";
import { AuthApi } from "Constants/ApiConstants";
import { getCookie, setCookie } from "Shared/CookieHelper";
import Cookies from "js-cookie";
import AxiosHelper from "Shared/AxiosHelper";

const AuthService = {
  ValidateUserToken: () => {
    const token = getCookie("token");
    if (token) {
      try {
        AxiosHelper.createApiEndpoint(
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
            }
          });
        return true;
      } catch (err) {
        return false;
      }
    }

    return false;
  },

  Login: async (username: string, password: string) => {
    const response = await axios
      .post(AuthApi.BaseUrl + AuthApi.Endpoint.UserLogin, {
        username,
        password,
      });
    if (response.data) {
      setCookie("token", response.data.token);
      return true;
    } else {
      return false;
    }
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
