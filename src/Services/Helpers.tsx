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
  return {
    fetch: () => axios.get(path),
    fetchById: (id: any) => axios.get(path + id),
    post: (newRecord: any) => axios.post(path, newRecord),
    postWithParams: (params: any) => axios.post(path, null, params),
    put: (id: any, updatedRecord: any) => axios.put(path + id, updatedRecord),
    delete: (id: any) => axios.delete(path + id),
  };
};
