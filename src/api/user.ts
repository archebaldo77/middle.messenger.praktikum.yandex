import HTTPTransport, { Method } from 'core/http-transport';

type UserApi = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

type UpdateUserApi = {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
};

export class User extends HTTPTransport {
  getUser() {
    return this.get(`/auth/user`);
  }

  getUserById(id: string) {
    return this.get(`/user/${id}`);
  }

  updateUser(user: UpdateUserApi) {
    return this.put(`/user/profile`, {
      data: user,
      method: Method.PUT,
      headers: { 'content-type': 'application/json' },
    });
  }

  addUser(user: UserApi) {
    return this.post(`/auth/signup`, {
      data: user,
      method: Method.POST,
      headers: { 'content-type': 'application/json' },
    });
  }

  updateUserAvatar(file: FormData) {
    return this.put(`/user/profile/avatar`, {
      data: file,
      method: Method.PUT,
    });
  }

  changePassword(oldPassword: string, newPassword: string) {
    return this.put(`/user/password`, {
      data: { oldPassword, newPassword },
      method: Method.PUT,
      headers: { 'content-type': 'application/json' },
    });
  }
}
