import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import { withStore } from 'HOCs/with-store';

import { socket } from 'socket/socket';

import type { Store } from 'store/store';

import './messages.pcss';

type MessagesProps = {
  userId: string;
  selectedChatId: string;
  token: string;
  messages: Message[];
  store: Store;
  onClick: () => void;
};

export class Messages extends Component<MessagesProps> {
  static componentName = ComponentName.Messages;

  _socket: WebSocket | null;

  constructor(props: MessagesProps) {
    super(props);

    this._socket = null;
  }

  componentDidUpdate(oldProps: Partial<any>, newProps: Partial<any>): boolean {
    if (oldProps.selectedChatId !== newProps.selectedChatId) {
      if (this._socket) {
        this._socket.close();
      }

      this._socket = socket(
        this.props.userId,
        this.props.selectedChatId,
        this.props.token,
        this.onUpdateMessage
      );

      this.setProps({
        onClick: this.onSendMessage,
      });

      return true;
    }

    return false;
  }

  protected onUpdateMessage = (data: Array<Message> | Message) => {
    if (data instanceof Array) {
      this.props.store.dispatch({ message: { list: data } });
      return;
    }

    if (typeof data === `object`) {
      if (data.type !== `pong` && data.type !== `user connected`) {
        const list = [...this.props.messages];
        list.push(data);

        this.props.store.dispatch({
          message: { list },
        });
        return;
      }
    }
  };

  protected onSendMessage = () => {
    const input = this.refs.messageControls.refs.message
      .element as HTMLInputElement;
    const message = input.value;

    if (message === ``) {
      return;
    }

    (this._socket as WebSocket).send(
      JSON.stringify({ content: message, type: `message` })
    );
    input.value = ``;
  };

  protected render() {
    return `
      <section class="messages messages-dialog">
       ${
         this.props.selectedChatId
           ? `{{{ User }}}
        {{{ MessagesList }}}
        {{{ MessagesControls onClick=onClick ref="messageControls" }}}`
           : `{{{ MessagesEmpty }}}`
       }
      </section>
    `;
  }
}

type PartialState = {
  chat: {
    selectedChat: string;
    token: string;
  };
  user: {
    data: {
      id: string;
    };
  };
  message: {
    list: Message[] | [];
  };
};

const mapStateToProps = (state: PartialState) => {
  return {
    userId: state.user.data.id,
    selectedChatId: state.chat.selectedChat,
    token: state.chat.token,
    messages: state.message.list,
  };
};

export default withStore(Messages, mapStateToProps);
