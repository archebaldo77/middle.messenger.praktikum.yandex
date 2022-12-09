type StateType = {
  app: {
    currentPage: string;
  };
  user: {
    isAuth: boolean;
    data: Record<string, any>;
  };
  chat: {
    isLoading: boolean;
    isError: boolean;
    list: Chat[] | [];
    selectedChat: Nullable<string>;
    token: Nullable<string>;
    usersInSelectedChat: string[] | [];
  };
  message: {
    list: Message[] | [];
  };
};

export const initialState: StateType = {
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
