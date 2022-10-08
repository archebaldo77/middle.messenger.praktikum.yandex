import Component from 'core/component';

import './messages-controls.pcss';

export class MessagesControls extends Component {
  static componentName = `MessagesControls`;

  protected render() {
    return `
      <div class="messages-controls">
        {{{ MessagesClip }}}
        {{{ InputItem
          type="text"
          name="message"
          placeholder="Сообщение"
          className="input-item--message"
        }}}
        {{{ MessagesSend}}}
      </div>
    `;
  }
}
