import Component from 'core/component';

import './chat-aside.pcss';

export class ChatAside extends Component {
  protected render() {
    return `
      <aside class="chats">
        {{{ Search }}}
        {{{ ChatList }}}
      </aside>
    `;
  }
}
