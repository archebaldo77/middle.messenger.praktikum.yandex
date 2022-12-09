import { Auth } from 'api/auth';

import type { Dispatch } from 'store/store';
import type { initialState } from 'store/initial-state';

const auhtApi = new Auth();

export const logout = async (dispatch: Dispatch<typeof initialState>) => {
  try {
    const { status } = await auhtApi.logout();
    if (status === 200) {
      dispatch({
        app: { currentPage: `/` },
        user: { isAuth: false, data: {} },
      });

      window.location.pathname = `/`;
    }
  } catch (error) {
    console.error(`Что-то пошло не так`);
  }
};
