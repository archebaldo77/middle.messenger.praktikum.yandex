import { Chats } from 'api/chats';

import type { Dispatch } from 'store/store';
import type { initialState } from 'store/initial-state';

const apiChats = new Chats();

export const addUserToChat =
  (id: string, chatId: string) =>
  async (
    dispatch: Dispatch<Partial<typeof initialState>>,
    state: typeof initialState
  ) => {
    try {
      const { status } = await apiChats.addUserTo(id, chatId);

      if (status >= 400 && status <= 500) {
        alert(`Пользователь не найден`);

        return;
      }

      const { response: users, status: __status } = await apiChats.getUsers(
        chatId
      );

      if (__status >= 400 && __status <= 500) {
        alert(`Что-то пошло не так, попробуйте повторить запрос`);

        return;
      }

      const usersInSelectedChat = users.map((user) => user.login);

      dispatch({ chat: { ...state.chat, usersInSelectedChat } });
    } catch {
      console.error(`Что-то пошло не так`);
    }
  };
