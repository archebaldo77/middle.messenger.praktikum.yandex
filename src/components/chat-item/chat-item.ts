import Component from 'core/component';

import './chat-item.pcss';

type ChatItemProps = {
  src: string;
  name: string;
  message: string;
  time: string;
  count?: number;
};

export class ChatItem extends Component {
  static componentName = `ChatItem`;

  constructor(props: ChatItemProps) {
    super(props);
  }

  protected render() {
    return `
      <section class="chat-item">
      <div class="chat-item__avatar">
        <img src={{src}} alt="avatar" />
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
