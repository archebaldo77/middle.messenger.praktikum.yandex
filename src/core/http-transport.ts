import { queryStringify } from 'helpers/http/query-stringify';
import { ApiURL } from 'helpers/const';

export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type Options = {
  method: Method;
  timeout?: number;
  data?: Record<string, any>;
  headers?: Record<string, string>;
};

export default class HTTPTransport {
  baseUrl: string;

  constructor(baseURL = ApiURL.base) {
    this.baseUrl = baseURL;
  }

  get = (url: string, options: Options = { method: Method.GET }) => {
    const urlWithParams = options.data
      ? url + queryStringify(options.data)
      : url;

    return this.request(
      urlWithParams,
      { ...options, method: Method.GET },
      options.timeout
    );
  };

  post = (url: string, options: Options = { method: Method.POST }) => {
    return this.request(
      url,
      { ...options, method: Method.POST },
      options.timeout
    );
  };

  put = (url: string, options: Options = { method: Method.PUT }) => {
    return this.request(
      url,
      { ...options, method: Method.PUT },
      options.timeout
    );
  };

  delete = (url: string, options: Options = { method: Method.DELETE }) => {
    return this.request(
      url,
      { ...options, method: Method.DELETE },
      options.timeout
    );
  };

  request = (
    url: string,
    options: Options = { method: Method.GET },
    timeout = 5000
  ): Promise<XMLHttpRequest> => {
    const { method, data, headers = {} } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, `${this.baseUrl}${url}`);
      xhr.responseType = 'json';

      const headersEntries = Object.entries(headers);

      headersEntries.forEach((item) => {
        xhr.setRequestHeader(item[0], item[1]);
      });

      xhr.timeout = timeout;
      xhr.withCredentials = true;

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onerror = reject;
      xhr.onabort = reject;
      xhr.ontimeout = reject;

      if (method === Method.GET || !data) {
        xhr.send();
        return;
      }

      if (data instanceof FormData) {
        xhr.send(data);
        return;
      }

      xhr.send(JSON.stringify(data));
    });
  };
}
