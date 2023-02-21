import axios from "axios";

const AxiosHelper = {
  createApiEndpoint: (baseAddress: string, path: string) => {
    let url = baseAddress + path + "/";
    return {
      fetch: () => axios.get(url),
      fetchById: (id: any) => axios.get(url + id),
      post: (newRecord: any) => axios.post(url, newRecord),
      postWithParams: (params: any) => axios.post(url, null, params),
      put: (id: any, updatedRecord: any) => axios.put(url + id, updatedRecord),
      delete: (id: any) => axios.delete(url + id),
    };
  },
};

export default AxiosHelper;
