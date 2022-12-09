import { Chats } from 'api/chats';

import type { Dispatch } from 'store/store';
import type { initialState } from 'store/initial-state';

const apiChats = new Chats();

export const deleteUserFromChat =
  (id: string, chatId: string) =>
  async (
    dispatch: Dispatch<Partial<typeof initialState>>,
    state: typeof initialState
  ) => {
    try {
      const { status } = await apiChats.deleteUser(id, chatId);

      if (status >= 400 && status <= 500) {
        alert(`Что-то пошло не так, попробуйте повторить запрос`);

        return;
      }

      const { response: users, status: _status } = await apiChats.getUsers(
        chatId
      );

      if (_status >= 400 && _status <= 500) {
        alert(`Что-то пошло не так, попробуйте повторить запрос`);

        return;
      }

      const usersInSelectedChat = users.map(
        (user: Record<'login', string>) => user.login
      );

      dispatch({ chat: { ...state.chat, usersInSelectedChat } });
    } catch {
      console.error(`Что-то пошло не так`);
    }
  };
