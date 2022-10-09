import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import './messages.pcss';

export class Messages extends Component {
  static componentName = ComponentName.Messages;

  protected render() {
    return `
      <section class="messages messages-dialog">
        {{{ User }}}
        {{{ MessagesList }}}
        {{{ MessagesControls }}}
      </section>
    `;
  }
}
