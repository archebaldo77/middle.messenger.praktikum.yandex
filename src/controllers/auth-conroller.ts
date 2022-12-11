import { Auth } from 'api/auth';
import { User } from 'api/user';

const apiAuth = new Auth();
const apiUser = new User();

type AuthData = {
  login: string;
  password: string;
};

export default class AuthController {
  public login = async (data: AuthData) => {
    try {
      const { status } = await apiAuth.login(data);

      if (status === 401) {
        alert(`Ошибка: проверьте логин и пароль`);

        return;
      }

      const { response } = await apiUser.getUser();

      window.store.dispatch({
        user: { ...window.store.getState().user, isAuth: true, data: response },
      });

      window.router.go(`/chats`);
    } catch (error) {
      console.error(`Что-то пошло не так`);
    }
  };

  public logout = async () => {
    try {
      const { status } = await apiAuth.logout();
      if (status === 200) {
        window.store.dispatch({
          app: { ...window.store.getState().app, currentPage: `/` },
          user: { ...window.store.getState().user, isAuth: false, data: {} },
        });

        window.location.pathname = `/`;
      }
    } catch (error) {
      console.error(`Что-то пошло не так`);
    }
  };

  init = async () => {
    const { response, status } = await apiUser.getUser();

    if (status === 401) {
      const allowedPath =
        window.location.pathname === `/register` ? `/register` : `/`;

      window.store.dispatch({
        app: { ...window.store.getState().app, currentPage: allowedPath },
        user: { ...window.store.getState().user, isAuth: false, data: {} },
      });

      window.router.go(allowedPath);

      return;
    }

    window.store.dispatch({
      app: {
        ...window.store.getState().app,
        currentPage: window.location.pathname,
      },
      user: { ...window.store.getState().user, isAuth: true, data: response },
    });

    window.router.go(window.location.pathname);
  };
}
