export const deepEqual = (a: any, b: any): boolean => {
  if (a === b) {
    return true;
  }

  if (
    a === null ||
    b === null ||
    typeof a !== 'object' ||
    typeof b !== 'object'
  ) {
    return false;
  }

  const aObjectKeys = Object.keys(a);
  const bObjectKeys = Object.keys(b);

  if (aObjectKeys.length !== bObjectKeys.length) {
    return false;
  }

  return aObjectKeys.reduce((acc: boolean, key) => {
    if (!acc) return false;

    if (!bObjectKeys.includes(key)) {
      return false;
    }

    return deepEqual(a[key] as any, b[key] as any);
  }, true);
};

export const sortMessagesByTime = (messages: Array<Message>) =>
  messages.sort((a, b) => {
    const time1 = new Date(a.time).getTime();
    const time2 = new Date(b.time).getTime();
    return time1 - time2;
  });
