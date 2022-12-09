import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import { changeSelectedChat } from 'actions/change-selected-chat';

import './chat-item.pcss';

import { withStore } from 'HOCs/with-store';

import type { Store } from 'store/store';

type ChatItemProps = {
  id: string;
  src: string;
  name: string;
  message: string;
  time: string;
  count?: number;
  onClick: () => void;
  store: Store;
};

type ComponentProps = {
  events: {
    click: () => void;
  };
};

export class ChatItem extends Component<ChatItemProps & ComponentProps> {
  static componentName = ComponentName.ChatItem;

  constructor(props: ChatItemProps) {
    super({
      ...props,
      events: {
        click: () =>
          this.props.store.dispatch(changeSelectedChat(`${this.props.id}`)),
      },
    });
  }

  protected render() {
    return `
      <section class="chat-item">
      <div class="chat-item__avatar">
      ${
        this.props.src
          ? `<img src=https://ya-praktikum.tech/api/v2/resources{{src}} alt="avatar" width=60 height=60 />`
          : `<div class="chat-item__mock-avatar">Изображение отсутствует</div>`
      }
      </div>
      <div class="chat-item__info">
        <p class="chat-item__name">{{name}}</p>
        <p class="chat-item__message">{{message}}</p>
        <time class="chat-item__time">{{time}}</time>
        {{#if count}}
          <div class="chat-item__count">{{count}}</div>
        {{/if}}
      </div>
    </section>
  `;
  }
}

export default withStore(ChatItem);
