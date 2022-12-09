import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import './messages-controls.pcss';

export default class MessagesControls extends Component<AnyProps> {
  static componentName = ComponentName.MessagesControls;

  protected render() {
    return `
      <div class="messages-controls">
        {{{ MessagesClip }}}
        {{{ InputItem
          type="text"
          name="message"
          placeholder="Сообщение"
          className="input-item--message"
          ref="message"
        }}}
        {{{ MessagesSend onClick=onClick }}}
      </div>
    `;
  }
}
