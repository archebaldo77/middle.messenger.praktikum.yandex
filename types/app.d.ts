declare global {
  export type Nullable<T> = T | null;
  export type Keys<T extends Record<string, unknown>> = keyof T;
  export type Values<T extends Record<string, unknown>> = T[Keys<T>];
  export type Indexed<T = unknown> = {
    [key in string]: T;
  };
  export type AnyProps = Record<string, unknown>;
  export type Message = {
    content: string;
    type: string;
    time: string;
  };
  export type Chat = {
    id: number;
    avatar: Nullable<string>;
    title: string;
    time: string;
    unread_count: string;
    last_message: {
      content: string;
    };
  };
  type UserData = {
    email: string;
    login: string;
    first_name: string;
    second_name: string;
    display_name: string;
    phone: number;
    avatar: string;
  };
}

export {};
