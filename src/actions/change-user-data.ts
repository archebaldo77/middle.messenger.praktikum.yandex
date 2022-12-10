import { User } from 'api/user';

import { apiCheckError } from 'helpers/fn';

import type { Dispatch } from 'store/store';
import type { initialState } from 'store/initial-state';

const userApi = new User();

type UserData = {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
};

export const changeUserData =
  (data: UserData) =>
  async (
    dispatch: Dispatch<typeof initialState>,
    state: typeof initialState
  ) => {
    const { status, response } = await userApi.updateUser(data);

    delete response.status;

    if (apiCheckError(status)) {
      return;
    }

    alert(`Данные сохранены!`);

    dispatch({ user: { ...state.user, isAuth: true, data: response } });
  };
