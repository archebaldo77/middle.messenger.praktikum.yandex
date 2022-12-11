import HTTPTransport, { Method } from 'core/http-transport';

type LoginApi = {
  login: string;
  password: string;
};

export class Auth extends HTTPTransport {
  login(data: LoginApi) {
    return this.post(`/auth/signin`, {
      data,
      method: Method.POST,
      headers: { 'content-type': 'application/json' },
    });
  }

  logout() {
    return this.post(`/auth/logout`);
  }
}
