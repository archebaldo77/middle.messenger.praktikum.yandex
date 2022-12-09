import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import { withStore } from 'HOCs/with-store';

import { sortMessagesByTime } from 'helpers/fn';

import './messages-list.pcss';

type MessagesListProps = {
  messages: Message[];
  userId: number;
};

export class MessagesList extends Component<MessagesListProps> {
  static componentName = ComponentName.MessagesList;

  constructor(props: MessagesListProps) {
    super(props);
  }

  protected render() {
    return `
    <ul class="messages-list">
      {{#each messages }}
        <li class="messages-list__item">
          {{{ MessagesItem
            text=this.content
            time=this.time
            id=this.user_id
          }}}
        </li>
      {{/each}}
    </ul>
    `;
  }
}

type PartialState = {
  message: {
    list: Message[];
  };
  user: {
    data: {
      id: string;
    };
  };
};

const mapStateToProps = (state: PartialState) => {
  return {
    messages: sortMessagesByTime(state.message.list),
    userId: state.user.data.id,
  };
};

export default withStore(MessagesList, mapStateToProps);
