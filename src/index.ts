require('babel-core/register');

import renderDOM from 'core/render-dom';
import registerComponent from 'core/register-component';

import 'styles/style.pcss';

import { InputItem } from 'components/input-item/input-item';
import { ChatAside } from 'components/chat-aside/chat-aside';
import { Search } from 'components/search/search';
import { SearchBar } from 'components/search-bar/search-bar';
import { ChatList } from 'components/chat-list/chat-list';
import { ChatItem } from 'components/chat-item/chat-item';
import { Messages } from 'components/messages/messages';
import { User } from 'components/user/user';
import { MessagesList } from 'components/messages-list/messages-list';
import { MessagesItem } from 'components/messages-item/messages-item';
import { MessagesControls } from 'components/messages-controls/messages-controls';
import { MessagesClip } from 'components/messages-clip/messages-clip';
import { MessagesSend } from 'components/messages-send/messages-send';
import { MessagesEmpty } from 'components/messages-empty/messages-empty';
import { ProfileForm } from 'components/profile-form/profile-form';
import { ProfileControls } from 'components/profile-controls/profile-controls';
import { ChangePasswordForm } from 'components/change-password-form/change-password-form';

import { Login } from 'pages/login/login';
import { Register } from 'pages/register/register';
import { Chats } from 'pages/chats/chats';
import { Profile } from 'pages/profile/profile';
import { ChangePassword } from 'pages/change-password/change-password';

registerComponent(InputItem);
registerComponent(ChatAside);
registerComponent(Search);
registerComponent(SearchBar);
registerComponent(ChatList);
registerComponent(ChatItem);
registerComponent(Messages);
registerComponent(User);
registerComponent(MessagesList);
registerComponent(MessagesItem);
registerComponent(MessagesControls);
registerComponent(MessagesClip);
registerComponent(MessagesSend);
registerComponent(MessagesEmpty);
registerComponent(ProfileForm);
registerComponent(ProfileControls);
registerComponent(ChangePasswordForm);

registerComponent(Login);
registerComponent(Register);
registerComponent(Chats);
registerComponent(Profile);
registerComponent(ChangePassword);

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new Login());
});
