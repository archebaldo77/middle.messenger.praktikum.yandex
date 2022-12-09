import { Dispatch } from 'store/store';

import { User } from 'api/user';

import type { initialState } from 'store/initial-state';

type UserApi = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

const userApi = new User();

export const registerService =
  (data: UserApi) =>
  async (dispatch: Dispatch<any>, state: typeof initialState) => {
    dispatch({ isLoading: true, isError: false });

    const {
      response: { id },
      status,
    } = await userApi.addUser(data);

    if (status >= 400 && status <= 499) {
      alert(`Произошла ошибка, попробуйте еще раз`);
      return;
    }

    const { response: userData } = await userApi.getUserById(`${id}`);

    dispatch({
      app: { currentPage: `/chats` },
      user: { ...state.user, isAuth: true, data: userData },
    });
  };
