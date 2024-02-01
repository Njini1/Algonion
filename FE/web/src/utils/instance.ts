import axios from "axios";
const api = import.meta.env.VITE_BACKEND;

let accessToken = localStorage.get('access-tocken');

const authenticatiedInstance = axios.create({
  baseURL: api,
  timeout: 1000,
  headers: { 'Authorizetion': accessToken }
});

const unAuthenticatedInstance = axios.create({
  baseURL: api,
  timeout: 1000,
})

export default { authenticatiedInstance, unAuthenticatedInstance };