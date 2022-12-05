import renderDOM from 'core/render-dom';

import { Router } from './router';
import { Store } from 'store/store';

import Login from 'pages/login/login';
import { Register } from 'pages/register/register';
import { Chats } from 'pages/chats/chats';
import { Profile } from 'pages/profile/profile';
import { ChangePassword } from 'pages/change-password/change-password';

const Route = {
  '/': Login,
  '/register': Register,
  '/chats': Chats,
  '/profile': Profile,
  '/password': ChangePassword,
};

export const Routes = [
  {
    path: `/`,
    shouldGuest: true,
    shouldAuth: false,
  },
  {
    path: `/register`,
    shouldGuest: true,
    shouldAuth: false,
  },
  {
    path: `/chats`,
    shouldGuest: false,
    shouldAuth: true,
  },
  {
    path: `/profile`,
    shouldGuest: false,
    shouldAuth: true,
  },
  {
    path: `/password`,
    shouldGuest: false,
    shouldAuth: true,
  },
];

export const initRouter = (router: Router, store: Store) => {
  store.on(`changed`, (prev, next) => {
    if (prev.app.currentPage !== next.app.currentPage) {
      const Page = Route[next.app.currentPage];
      renderDOM(new Page({}));
    }
  });

  Routes.forEach(({ path, shouldGuest, shouldAuth }) => {
    router.use(path, () => {
      const {
        user: { isAuth },
      } = store.getState();

      if (shouldAuth && isAuth) {
        store.dispatch({
          app: { ...store.getState().app, currentPage: path },
        });

        return;
      }

      if (shouldGuest && !isAuth) {
        store.dispatch({
          app: { ...store.getState().app, currentPage: path },
        });

        return;
      }

      if (shouldAuth && !isAuth) {
        store.dispatch({
          app: { ...store.getState().app, currentPage: `/` },
        });

        router.go(`/`);

        return;
      }

      if (shouldGuest && isAuth) {
        store.dispatch({
          app: { ...store.getState().app, currentPage: `/chats` },
        });

        router.go(`/chats`);

        return;
      }
    });
  });

  router.start();
};
