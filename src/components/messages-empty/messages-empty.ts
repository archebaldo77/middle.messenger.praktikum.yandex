import Component from 'core/component';

import './messages-empty.pcss';

export class MessagesEmpty extends Component {
  static componentName = `MessagesEmpty`;

  protected render() {
    return `
      <section class="messages messages--empty">
        <p class="text">Выберите чат чтобы отправить сообщение</p>
      </section>
    `;
  }
}
