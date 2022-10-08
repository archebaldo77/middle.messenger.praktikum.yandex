import Component from 'core/component';

import './chats.pcss';

export class Chats extends Component {
  static componentName = `Chats`;

  protected render() {
    return `
      <main class="chats-page">
        <div class="chats-page__container">
          {{{ ChatAside }}}
          {{{ Messages }}}
        </div>
      </main>`;
  }
}
