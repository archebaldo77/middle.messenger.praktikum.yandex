import { queryStringify } from 'helpers/http/query-stringify';

enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

type Options = {
  method: Methods;
  timeout?: number;
  data?: Record<string, string>;
  headers?: Record<string, string>;
};

export default class HTTPTransport {
  get = (url: string, options: Options = { method: Methods.GET }) => {
    const urlWithParams = options.data
      ? url + queryStringify(options.data)
      : url;

    return this.request(
      urlWithParams,
      { ...options, method: Methods.GET },
      options.timeout
    );
  };

  post = (url: string, options: Options = { method: Methods.POST }) => {
    return this.request(
      url,
      { ...options, method: Methods.POST },
      options.timeout
    );
  };

  put = (url: string, options: Options = { method: Methods.PUT }) => {
    return this.request(
      url,
      { ...options, method: Methods.PUT },
      options.timeout
    );
  };

  delete = (url: string, options: Options = { method: Methods.DELETE }) => {
    return this.request(
      url,
      { ...options, method: Methods.DELETE },
      options.timeout
    );
  };

  request = (
    url: string,
    options: Options = { method: Methods.GET },
    timeout = 5000
  ): Promise<XMLHttpRequest> => {
    const { method, data, headers = {} } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url);
      xhr.responseType = 'json';

      const headersEntries = Object.entries(headers);

      headersEntries.forEach((item) => {
        xhr.setRequestHeader(item[0], item[1]);
      });

      xhr.timeout = timeout;

      xhr.onload = () => {
        resolve(xhr.response);
      };

      xhr.onerror = reject;
      xhr.onabort = reject;
      xhr.ontimeout = reject;

      if (method === Methods.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
