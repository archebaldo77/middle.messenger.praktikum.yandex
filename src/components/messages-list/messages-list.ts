import Component from 'core/component';

import './messages-list.pcss';

import messages from 'mocks/messages.json';

export class MessagesList extends Component {
  static componentName = `MessagesList`;

  constructor() {
    super({ messages });
  }

  protected render() {
    return `
    <ul class="messages-list">
      {{#each messages.data }}
        <li class="messages-list__item">
          {{{ MessagesItem
            text=this.text
            time=this.time
            from=this.from
          }}}
        </li>
      {{/each}}
    </ul>
    `;
  }
}
