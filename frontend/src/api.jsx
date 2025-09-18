import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const register = (data) => API.post("/register", data);
export const login = (data) => API.post("/login", data);
export const forgot = (data) => API.post("/forgot", data);
export const reset = (token, data) => API.post(`/reset/${token}`, data);
