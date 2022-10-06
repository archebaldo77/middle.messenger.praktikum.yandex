import Component from 'core/component';

import './chats.pcss';

export class Chats extends Component {
  render() {
    return `
      <main class="chats-page">
        <div class="chats-page__container">
          {{{ ChatAside }}}
          {{{ Messages }}}
        </div>
      </main>`;
  }
}
