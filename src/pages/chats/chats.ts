import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import './chats.pcss';

export default class Chats extends Component<AnyProps> {
  static componentName = ComponentName.Chats;

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
