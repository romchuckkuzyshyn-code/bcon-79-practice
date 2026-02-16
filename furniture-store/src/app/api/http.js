import axios from "axios";
import { BASE_URL } from "../core/config";

axios.defaults.baseURL = BASE_URL;

export function request(endpoint, options = {}, method = "get") {
  return axios({
    url: endpoint,
    method,
    ...options,
  })
    .then(response => {
      return response.data;
    })
    .catch(() => {});
}
