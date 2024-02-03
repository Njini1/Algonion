import axios, { AxiosInstance } from "axios";
const api = import.meta.env.VITE_BACK_END;

const accessToken = localStorage.getItem("accessTocken");

const axiosAuthApi = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: api,
    headers: { Authorizetion: "Bearer " + accessToken },
    timeout: 1000,
  });
  return instance;
};

const axiosApi = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: api,
    timeout: 1000,
  });
  return instance;
};

export { axiosAuthApi, axiosApi };
