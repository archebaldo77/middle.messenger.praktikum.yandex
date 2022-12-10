import { Chats } from 'api/chats';

import { apiCheckError } from 'helpers/fn';

import type { initialState } from 'store/initial-state';
import type { Dispatch } from 'store/store';

const api = new Chats();

export const createChat =
  (title: string) =>
  async (
    dispatch: Dispatch<Partial<typeof initialState>>,
    state: typeof initialState
  ) => {
    try {
      dispatch({ chat: { ...state.chat, isLoading: true } });
      const { status } = await api.createChat(title);

      if (apiCheckError(status)) {
        return;
      }

      const { response } = await api.getChats();

      dispatch({
        chat: {
          ...state.chat,
          list: response,
          isError: false,
          isLoading: false,
        },
      });
    } catch {
      console.error(`Что-то пошло не так`);
    }
  };
