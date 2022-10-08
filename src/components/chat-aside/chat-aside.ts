import Component from 'core/component';

import './chat-aside.pcss';

export class ChatAside extends Component {
  static componentName = `ChatAside`;

  protected render() {
    return `
      <aside class="chats">
        {{{ Search }}}
        {{{ ChatList }}}
      </aside>
    `;
  }
}
