import { User } from 'api/user';

const api = new User();

export const changeUserPassword =
  (oldPassword: string, newPassword: string) => async () => {
    try {
      const { status } = await api.changePassword(oldPassword, newPassword);

      if (status === 200) {
        alert(`Пароль успешно изменен`);
      }

      if (status === 400) {
        alert(`Старый пароль введен неверно, попробуйте еще раз`);
      }
    } catch {
      console.error(`Что-то пошло не так`);
    }
  };
