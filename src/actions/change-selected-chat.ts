import { Chats } from 'api/chats';

import type { initialState } from 'store/initial-state';
import type { Dispatch } from 'store/store';

const api = new Chats();

export const changeSelectedChat =
  (id: string) =>
  async (
    dispatch: Dispatch<Partial<typeof initialState>>,
    state: typeof initialState
  ) => {
    try {
      const {
        response: { token },
      } = await api.getToken(id);

      const { response: users } = await api.getUsers(id);
      const usersInSelectedChat = users.map((user) => user.login);

      dispatch({
        chat: {
          ...state.chat,
          token,
          selectedChat: id,
          usersInSelectedChat,
        },
      });
    } catch {
      console.error(`Что-то пошло не так`);
    }
  };
