const phoneRegExp = /^[\d\\+][\d\\(\\)\\ -]{9,14}\d$/;

export const validatePhone = (value: string): string => {
  if (value.search(phoneRegExp) === -1) {
    return `Телефон должен содержать от 10 до 15 цифр`;
  }

  return ``;
};
