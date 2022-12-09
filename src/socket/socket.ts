export const socket = (
  userId: string,
  selectedChatId: string,
  token: string,
  onUpdate: (data: Record<string, any>) => void
) => {
  const instance = new WebSocket(
    `wss://ya-praktikum.tech/ws/chats/${userId}/${selectedChatId}/${token}`
  );

  let id: NodeJS.Timeout;

  instance.addEventListener('open', () => {
    instance.send(
      JSON.stringify({
        content: '0',
        type: 'get old',
      })
    );

    id = setInterval(
      () => instance.send(JSON.stringify({ type: `ping` })),
      10000
    );
  });

  instance.addEventListener('close', () => {
    clearInterval(id);
  });

  instance.addEventListener(`message`, (event) => {
    const data = JSON.parse(event.data);
    onUpdate(data);
  });

  instance.addEventListener(`error`, (error) => {
    console.log('Ошибка', error);
  });

  return instance;
};
