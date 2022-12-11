import { Chats } from 'api/chats';

import { apiCheckError } from 'helpers/fn';

const apiChats = new Chats();

export default class ChatsController {
  public getChats = async () => {
    try {
      window.store.dispatch({
        chat: { ...window.store.getState().chat, isLoading: true },
      });
      const { response, status } = await apiChats.getChats();

      if (apiCheckError(status)) {
        return;
      }

      window.store.dispatch({
        chat: {
          ...window.store.getState().chat,
          list: response,
          isError: false,
          isLoading: false,
        },
      });
    } catch {
      console.error(`Что-то пошло не так`);
    }
  };

  public createChat = async (title: string) => {
    try {
      window.store.dispatch({
        chat: { ...window.store.getState().chat, isLoading: true },
      });
      const { status } = await apiChats.createChat(title);

      if (apiCheckError(status)) {
        return;
      }

      const { response } = await apiChats.getChats();

      window.store.dispatch({
        chat: {
          ...window.store.getState().chat,
          list: response,
          isError: false,
          isLoading: false,
        },
      });
    } catch {
      console.error(`Что-то пошло не так`);
    }
  };

  public changeSelectedChat = async (id: string) => {
    try {
      const {
        response: { token },
      } = await apiChats.getToken(id);

      const { response: users } = await apiChats.getUsers(id);
      const usersInSelectedChat = users.map(
        (user: Record<`login`, string>) => user.login
      );

      window.store.dispatch({
        chat: {
          ...window.store.getState().chat,
          token,
          selectedChat: id,
          usersInSelectedChat,
        },
      });
    } catch {
      console.error(`Что-то пошло не так`);
    }
  };

  public addUserToChat = async (id: string, chatId: string) => {
    try {
      const { status } = await apiChats.addUserTo(id, chatId);

      if (apiCheckError(status, `Пользователь не найден`)) {
        return;
      }

      const { response: users, status: __status } = await apiChats.getUsers(
        chatId
      );

      if (apiCheckError(__status)) {
        return;
      }

      const usersInSelectedChat = users.map(
        (user: Record<`login`, string>) => user.login
      );

      window.store.dispatch({
        chat: { ...window.store.getState().chat, usersInSelectedChat },
      });
    } catch {
      console.error(`Что-то пошло не так`);
    }
  };

  public deleteUserFromChat = async (id: string, chatId: string) => {
    try {
      const { status } = await apiChats.deleteUser(id, chatId);

      if (apiCheckError(status)) {
        return;
      }

      const { response: users, status: _status } = await apiChats.getUsers(
        chatId
      );

      if (apiCheckError(_status)) {
        return;
      }

      const usersInSelectedChat = users.map(
        (user: Record<'login', string>) => user.login
      );

      window.store.dispatch({
        chat: { ...window.store.getState().chat, usersInSelectedChat },
      });
    } catch {
      console.error(`Что-то пошло не так`);
    }
  };
}
