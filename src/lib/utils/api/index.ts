import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      refetchOnReconnect: true,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-type": "application/vnd.github+json",
  },
});

api.interceptors.request.use(function (config) {
  const token = import.meta.env.VITE_DEFAULT_TOKEN;
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    throw error;
  },
);
