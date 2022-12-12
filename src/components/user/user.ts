import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import { withStore } from 'HOCs/with-store';

import ChatsController from 'controllers/chats-controller';

import type { initialState } from 'store/initial-state';
import type { Store } from 'store/store';

import './user.pcss';

const chatController = new ChatsController();

type UserProps = {
  onAddUser: () => void;
  onDeleteUser: () => void;
  chat: Chat;
  users: string[];
  selectedChat: string;
  userId: string;
  store: Store;
};

export class User extends Component<UserProps> {
  static componentName = ComponentName.User;

  constructor(props: UserProps) {
    super(props);

    this.setProps({
      onAddUser: this.onAddUser,
      onDeleteUser: this.onDeleteUser,
    });
  }

  protected onAddUser = () => {
    const id = prompt(`Введите ID пользователя`);

    if (id === null || id === ` `) {
      return;
    }

    if (String(this.props.userId) === id) {
      alert(`Вы уже в чате`);

      return;
    }

    chatController.addUserToChat(id, this.props.selectedChat);
  };

  protected onDeleteUser = () => {
    const id = prompt(`Введите ID пользователя`);

    if (id === null || id.trim() === ``) {
      return;
    }

    if (String(this.props.userId) === id) {
      alert(`Нельзя удалить создателя чата`);

      return;
    }

    chatController.deleteUserFromChat(id, this.props.selectedChat);
  };

  protected render() {
    return `
      <div class="user">
        <div class="user-profile__wrapper">
          <section class="user-profile">
          <div class="user-profile__avatar">
          ${
            this.props.chat.avatar
              ? `<img src=https://ya-praktikum.tech/api/v2/resources{{src}} alt="avatar" width=60 height=60 />`
              : `<div class="chat-item__mock-avatar">Изображение отсутствует</div>`
          }
          </div>
          <p class="user-profile__name">${this.props.chat.title}</p>
          </section>
          <p class="user-profile__login">Пользователи: ${this.props.users.join(
            `, `
          )}</p>
        </div>
        <div class="user__menu">
          {{{ Button text="Добавить пользователя" type="button" className="user__button user__button-success" onClick=onAddUser }}}
          {{{ Button text="Удалить пользователя" type="button" className="user__button user__button-danger" onClick=onDeleteUser }}}
        </div>
      </div>
    `;
  }
}

const mapStateToProps = (state: typeof initialState) => {
  return {
    chat: state.chat.list.find(
      ({ id }) => Number(id) === Number(state.chat.selectedChat)
    ),
    users: state.chat.usersInSelectedChat,
    selectedChat: state.chat.selectedChat,
    userId: state.user.data.id,
  };
};

export default withStore(User, mapStateToProps);
