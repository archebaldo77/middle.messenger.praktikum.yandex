import { User } from 'api/user';

import type { Dispatch } from 'store/store';
import type { initialState } from 'store/initial-state';

const user = new User();

export const init = async (
  dispatch: Dispatch<Partial<typeof initialState>>,
  state: typeof initialState
) => {
  const { response, status } = await user.getUser();

  if (status === 401) {
    const allowedPath =
      window.location.pathname === `/register` ? `/register` : `/`;

    dispatch({
      app: { ...state.app, currentPage: allowedPath },
      user: { ...state.user, isAuth: false, data: {} },
    });

    window.router.go(allowedPath);

    return;
  }

  dispatch({
    app: { ...state.app, currentPage: window.location.pathname },
    user: { ...state.user, isAuth: true, data: response },
  });

  window.router.go(window.location.pathname);
};
