import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import { withStore } from 'HOCs/with-store';

import './messages-item.pcss';

type MessagesItemProps = {
  text: string;
  time: string;
  id: number;
  userId: number;
  from?: string;
};

export class MessagesItem extends Component<MessagesItemProps> {
  static componentName = ComponentName.MessagesItem;

  constructor(props: MessagesItemProps) {
    super(props);
  }

  protected render() {
    return `
      {{#if ${this.props.id === this.props.userId}}}
        <section class="messages-item messages-item--to">
          <p class="messages-item__text">
            {{text}}
          </p>
          <time class="messages-item__time">{{time}}</time>
        </section>
        {{else}}
        <section class="messages-item messages-item--from">
          <p class="messages-item__text">
            {{text}}
          </p>
          <time class="messages-item__time">{{time}}</time>
        </section>
      {{/if}}
    `;
  }
}

type PartialState = {
  user: {
    data: {
      id: number;
    };
  };
};

const mapStateToProps = (state: PartialState) => {
  return {
    userId: state.user.data.id,
  };
};

export default withStore(MessagesItem, mapStateToProps);
