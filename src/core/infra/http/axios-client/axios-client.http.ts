import _axios, { AxiosInstance } from "axios";
import { IHttpClient } from "@/core/data/interfaces/http-client.interface";

const defaultAxiosInstance = _axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

interface IAxiosClient {
  (axios?: AxiosInstance): IHttpClient;
}

export const axiosClient: IAxiosClient = (axios = defaultAxiosInstance) => {
  const post: IHttpClient["post"] = async ({ url, body, headers }) => {
    const response = await axios.post(url, body, { headers });

    return { statusCode: response.status, data: response.data };
  };

  const get: IHttpClient["get"] = async ({ url, headers, responseType }) => {
    const response = await axios.get(url, {
      headers,
      responseType: responseType ?? "json",
    });

    return { statusCode: response.status, data: response.data };
  };

  const patch: IHttpClient["patch"] = async ({ url, body, headers }) => {
    const response = await axios.patch(url, body, { headers });

    return { statusCode: response.status, data: response.data };
  };

  const put: IHttpClient["put"] = async ({ url, body, headers }) => {
    const response = await axios.put(url, body, { headers });

    return { statusCode: response.status, data: response.data };
  };

  const del: IHttpClient["delete"] = async ({ url, headers }) => {
    const response = await axios.delete(url, { headers });

    return { statusCode: response.status, data: response.data };
  };

  return {
    post,
    get,
    patch,
    put,
    delete: del,
  };
};
