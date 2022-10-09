import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import './chat-aside.pcss';

export class ChatAside extends Component {
  static componentName = ComponentName.ChatAside;

  protected render() {
    return `
      <aside class="chats">
        {{{ Search }}}
        {{{ ChatList }}}
      </aside>
    `;
  }
}
