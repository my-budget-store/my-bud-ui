import Cookies from "js-cookie";
import axios from "axios";

export const setCookie = (name: string, value: string) => {
  Cookies.set(name, value);
};

export const getCookie = (name: string) => {
  return Cookies.get(name);
};

export const removeCookie = (name: string) => {
  return Cookies.remove(name);
};

export const HttpRequest = (path: string) => {
  let url = path + "/";
  return {
    fetch: () => axios.get(url),
    fetchById: (id: any) => axios.get(url + id),
    post: (newRecord: any) => axios.post(url, newRecord),
    postWithParams: (params: any) => axios.post(url, null, params),
    put: (id: any, updatedRecord: any) => axios.put(url + id, updatedRecord),
    delete: (id: any) => axios.delete(url + id),
  };
};
