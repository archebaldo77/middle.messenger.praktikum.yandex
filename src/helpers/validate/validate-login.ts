const loginRegExp = /^[a-zA-Z0-9][a-zA-Z0-9-_\\.]{2,19}$/g;

export const validateLogin = (value: string): string => {
  if (value.search(loginRegExp) === -1) {
    return `Поле должно содержать от 3 до 20 латинских символов`;
  }

  return ``;
};
