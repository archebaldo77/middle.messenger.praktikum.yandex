import { User } from 'api/user';

import { apiCheckError } from 'helpers/fn';

const apiUser = new User();

type UserDataApi = {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
};

type UserApi = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export default class UserController {
  public changeUserPassword = async (
    oldPassword: string,
    newPassword: string
  ) => {
    try {
      const { status } = await apiUser.changePassword(oldPassword, newPassword);

      if (status === 200) {
        alert(`Пароль успешно изменен`);
      }

      if (status === 400) {
        alert(`Старый пароль введен неверно, попробуйте еще раз`);
      }
    } catch {
      console.error(`Что-то пошло не так`);
    }
  };

  public changeUserData = async (data: UserDataApi) => {
    const { status, response } = await apiUser.updateUser(data);

    delete response.status;

    if (apiCheckError(status)) {
      return;
    }

    alert(`Данные сохранены!`);

    window.store.dispatch({
      user: { ...window.store.getState().user, isAuth: true, data: response },
    });
  };

  public changeUserAvatar = async (data: FormData) => {
    try {
      const { response, status } = await apiUser.updateUserAvatar(data);

      if (apiCheckError(status)) {
        return;
      }

      delete response.status;

      window.store.dispatch({
        user: { ...window.store.getState().user, data: response },
      });
    } catch {
      console.error(`Что-то пошло не так`);
    }
  };

  register = async (data: UserApi) => {
    const {
      response: { id },
      status,
    } = await apiUser.addUser(data);

    if (apiCheckError(status)) {
      return;
    }

    const { response: userData } = await apiUser.getUserById(`${id}`);

    window.store.dispatch({
      app: { currentPage: `/chats` },
      user: { ...window.store.getState().user, isAuth: true, data: userData },
    });
  };
}
