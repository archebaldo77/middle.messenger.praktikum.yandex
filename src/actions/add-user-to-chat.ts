import { Chats } from 'api/chats';

import { apiCheckError } from 'helpers/fn';

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

      if (apiCheckError(status, `Пользователь не найден`)) {
        return;
      }

      const { response: users, status: __status } = await apiChats.getUsers(
        chatId
      );

      if (apiCheckError(__status)) {
        return;
      }

      const usersInSelectedChat = users.map((user) => user.login);

      dispatch({ chat: { ...state.chat, usersInSelectedChat } });
    } catch {
      console.error(`Что-то пошло не так`);
    }
  };
