import { User } from 'api/user';

import { apiCheckError } from 'helpers/fn';

import type { Dispatch } from 'store/store';
import type { initialState } from 'store/initial-state';

const api = new User();

export const updateUserAvatar =
  (data: FormData) =>
  async (
    dispatch: Dispatch<Partial<typeof initialState>>,
    state: typeof initialState
  ) => {
    try {
      const { response, status } = await api.updateUserAvatar(data);

      if (apiCheckError(status)) {
        return;
      }

      delete response.status;

      dispatch({ user: { ...state.user, data: response } });
    } catch {
      console.error(`Что-то пошло не так`);
    }
  };
