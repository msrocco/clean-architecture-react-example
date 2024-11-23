import { ResponseType } from "axios";

type HttpRequest = {
  url: string;
  headers?: Record<string, string>;
  responseType?: ResponseType;
};

export type HttpGetRequest = HttpRequest & {
  responseType?: string;
};

type HttpBody = Record<string, unknown>;

type HttpDeleteRequest = HttpRequest;

type HttpPostRequest<B> = HttpRequest & {
  body: B;
};

type HttpPatchRequest<B> = HttpRequest & {
  body: B;
};

type HttpPutRequest<B> = HttpRequest & {
  body: B;
};

export type HttpResponse<T = unknown> = {
  statusCode: number;
  data?: T;
};

export interface IHttpClient {
  post: <T, B = HttpBody>(params: HttpPostRequest<B>) => Promise<HttpResponse<T>>;
  put: <T, B = HttpBody>(params: HttpPutRequest<B>) => Promise<HttpResponse<T>>;
  patch: <T, B = HttpBody>(params: HttpPatchRequest<B>) => Promise<HttpResponse<T>>;
  get: <T>(params: HttpGetRequest) => Promise<HttpResponse<T>>;
  delete: <T>(params: HttpDeleteRequest) => Promise<HttpResponse<T>>;
};
