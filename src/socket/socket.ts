import { ApiURL } from 'helpers/const';

export const socket = (
  userId: string,
  selectedChatId: string,
  token: string,
  onUpdate: (data: Message | Message[]) => void
) => {
  const instance = new WebSocket(
    `${ApiURL.websocket}/${userId}/${selectedChatId}/${token}`
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
