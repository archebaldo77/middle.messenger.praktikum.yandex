import HTTPTransport, { Method } from 'core/http-transport';

export class Chats extends HTTPTransport {
  getChats() {
    return this.get(`/chats`);
  }

  getUsers(chatId: string) {
    return this.get(`/chats/${chatId}/users`);
  }

  createChat(title: string) {
    return this.post(`/chats`, {
      data: { title },
      method: Method.POST,
      headers: { 'content-type': 'application/json' },
    });
  }

  getToken(id: string) {
    return this.post(`/chats/token/${id}`, {
      method: Method.POST,
      headers: { 'content-type': 'application/json' },
    });
  }

  addUserTo(userId: string, chatId: string) {
    return this.put(`/chats/users`, {
      data: { users: [userId], chatId },
      method: Method.PUT,
      headers: { 'content-type': 'application/json' },
    });
  }

  deleteUser(userId: string, chatId: string) {
    return this.delete(`/chats/users`, {
      data: { users: [userId], chatId },
      method: Method.DELETE,
      headers: { 'content-type': 'application/json' },
    });
  }
}
