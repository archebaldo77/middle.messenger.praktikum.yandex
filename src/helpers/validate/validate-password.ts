const passwordRegExp = /(?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,40}/g;

export const validatePassword = (value: string): string => {
  if (value.search(passwordRegExp) === -1) {
    return `Пароль должен содержать от 8 до 40 латинских символов, цифру и заглавную букву`;
  }

  return ``;
};
