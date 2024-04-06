import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import {
  clearToken,
  getRefreshToken,
  getToken,
  storeToken,
} from "../utils/main-utils";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Pragma: "no-cache",
    "Cache-control": "no-cache",
    timeout: 20000,
  },
});
api.interceptors.request.use(function (config) {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
const goToLogin = () => {
  clearToken();
  window.location.href = "/login";
};

api.interceptors.response.use(
  function (response: AxiosResponse) {
    // If a new token is included in the response, store it
    const newToken = response.headers["new-access-token"];
    if (newToken) {
      storeToken(newToken);
    }
    return response;
  },
  async function (error: AxiosError) {
    const originalRequest = error.config as AxiosRequestConfig;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Attempt to get a new access token using the refresh token
        const refreshToken = getRefreshToken(); // Modify to get the refresh token
        if (refreshToken) {
          const response = await axios.post(
            `${import.meta.env.VITE_API_URL}users/refresh-token`,
            {
              refreshToken,
            }
          );

          const { accessToken } = response.data;
          storeToken(accessToken); // Modify to store the new access token

          // Update the header and retry the original request
          api.defaults.headers.common["Authorization"] =
            `Bearer ${accessToken}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        // If token refresh fails, redirect to the login page
        goToLogin();
        return Promise.reject(refreshError);
      }
    }

    // If the error is not a 401 or any other case, reject the promise
    return Promise.reject(error);
  }
);

export default api;
