const nameRegExp = /^[a-zA-Zа-яА-Я][a-zA-Za-яА-Я-\\.]{1,20}$/g;

export const validateName = (value: string): string => {
  if (value.search(nameRegExp) === -1) {
    return `Первая буква должна быть заглавной, допускаются только латиница и кириллица`;
  }

  return ``;
};
