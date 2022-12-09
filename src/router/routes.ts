import renderDOM from 'core/render-dom';

import { Router } from './router';
import { Store } from 'store/store';

import Login from 'pages/login/login';
import Register from 'pages/register/register';
import Chats from 'pages/chats/chats';
import Profile from 'pages/profile/profile';
import ChangePassword from 'pages/change-password/change-password';
import NotFound from 'pages/not-found/not-found';

const Route: Record<string, any> = {
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

export const initRouter = (
  router: Router,
  store: Store,
  cb: any = () => undefined
) => {
  store.on(`changed`, (prev, next) => {
    if (prev.app.currentPage !== next.app.currentPage) {
      const isExistingPath = Routes.findIndex(
        ({ path }) => path === next.app.currentPage
      );

      const Page = isExistingPath > -1 ? Route[next.app.currentPage] : NotFound;
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
          app: { currentPage: path },
        });

        return;
      }

      if (shouldGuest && !isAuth) {
        store.dispatch({
          app: { currentPage: path },
        });

        return;
      }

      if (shouldAuth && !isAuth) {
        store.dispatch({
          app: { currentPage: `/` },
        });

        router.go(`/`);

        return;
      }

      if (shouldGuest && isAuth) {
        store.dispatch({
          app: { currentPage: `/chats` },
        });

        router.go(`/chats`);

        return;
      }
    });
  });

  new Promise(() => {
    store.dispatch(cb);
  }).then(() => router.start());
};
