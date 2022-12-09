import { Auth } from 'api/auth';
import { User } from 'api/user';

import type { Dispatch } from 'store/store';
import type { initialState } from 'store/initial-state';

const authApi = new Auth();
const userApi = new User();

type AuthData = {
  login: string;
  password: string;
};

export const login =
  (data: AuthData) =>
  async (
    dispatch: Dispatch<typeof initialState>,
    state: typeof initialState
  ) => {
    try {
      const { status } = await authApi.login(data);

      if (status === 401) {
        alert(`Ошибка: проверьте логин и пароль`);
        return;
      }

      const { response } = await userApi.getUser();

      dispatch({ user: { ...state.user, isAuth: true, data: response } });

      window.router.go(`/chats`);
    } catch (error) {
      console.error(`Что-то пошло не так`);
    }
  };
