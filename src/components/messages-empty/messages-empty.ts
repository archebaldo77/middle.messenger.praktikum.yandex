import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import './messages-empty.pcss';

export default class MessagesEmpty extends Component<AnyProps> {
  static componentName = ComponentName.MessagesEmpty;

  protected render() {
    return `
      <section class="messages messages--empty">
        <p class="text">Выберите чат чтобы отправить сообщение</p>
      </section>
    `;
  }
}
