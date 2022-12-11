import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import ChatsController from 'controllers/chats-controller';

import './chat-list.pcss';

import { withStore } from 'HOCs/with-store';

import type { Store } from 'store/store';

const chatsController = new ChatsController();

type ChatListProps = {
  onCreateChatClick: () => void;
  store: Store;
};

type ComponentProps = ChatListProps & ChatStoreProps;

export class ChatList extends Component<ComponentProps> {
  static componentName = ComponentName.ChatList;

  constructor(props: ComponentProps) {
    super(props);

    chatsController.getChats();

    this.setProps({
      onCreateChatClick: this.onCreateChatClick,
    });
  }

  protected onCreateChatClick = () => {
    const chatName = prompt(`Введите название чата`);

    if (!chatName) {
      return;
    }

    chatsController.createChat(chatName);
  };

  protected render() {
    return `
      <ul class="chat-list">
      {{{ Button text="Добавить чат" type="button" className="chat-list__button" onClick=onCreateChatClick }}}
        {{#each chatList}}
          <li class="chat-list__item">
            {{{ ChatItem
                id=this.id
                src=this.avatar
                name=this.title
                message=this.last_message.content
                time=this.time
                count=this.unread_count
            }}}
          </li>
        {{/each}}
    </ul>
  `;
  }
}

type ChatStoreProps = {
  avatar: Nullable<string>;
  title: string;
  time: string;
  unread_count: string;
  last_message: {
    content: string;
  };
};

type PartialState = {
  chat: {
    isLoading: boolean;
    list: ChatListProps[] | [];
  };
};

const mapStateToProps = (state: PartialState) => {
  return {
    isLoading: state.chat.isLoading,
    chatList: state.chat.list,
  };
};

export default withStore(ChatList, mapStateToProps);
