import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import './chat-list.pcss';

import chats from 'mocks/chats.json';

export class ChatList extends Component {
  static componentName = ComponentName.ChatList;

  constructor() {
    super({ chats });
  }

  protected render() {
    return `
      <ul class="chat-list">
        {{#each chats.data}}
          <li class="chat-list__item">
            {{{ ChatItem
                src=this.src
                name=this.name
                message=this.message
                time=this.time
                count=this.count
            }}}
          </li>
        {{/each}}
    </ul>
  `;
  }
}
