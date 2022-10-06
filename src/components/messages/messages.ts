import Component from 'core/component';

import './messages.pcss';

export class Messages extends Component {
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
