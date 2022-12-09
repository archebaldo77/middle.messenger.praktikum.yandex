import { User } from 'api/user';

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

      console.log(response);

      if (status >= 400 && status <= 500) {
        alert(`Что-то пошло не так, попробуйте повторить запрос`);

        return;
      }

      delete response.status;

      dispatch({ user: { ...state.user, data: response } });
    } catch {
      console.error(`Что-то пошло не так`);
    }
  };
