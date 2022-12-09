export const initialState = {
  app: {
    currentPage: ``,
  },
  user: {
    isAuth: false,
    data: {},
  },
  chat: {
    isLoading: false,
    isError: false,
    list: [],
    selectedChat: null,
    token: null,
    usersInSelectedChat: [],
  },
  message: {
    list: [],
  },
};
