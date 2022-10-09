const emailRegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g;

export const validateEmail = (value: string): string => {
  if (value.search(emailRegExp) === -1) {
    return `Введен некорректный Email`;
  }

  return ``;
};
