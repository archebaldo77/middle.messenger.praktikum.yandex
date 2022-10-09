import Component from 'core/component';

import { Login } from 'pages/login/login';
import { Register } from 'pages/register/register';
import { Chats } from 'pages/chats/chats';
import { Profile } from 'pages/profile/profile';
import { ChangePassword } from 'pages/change-password/change-password';

type Routes = Record<string, () => Component>;

export const routes: Routes = {
  '/': () => new Login(),
  '/register': () => new Register(),
  '/profile': () => new Profile(),
  '/chats': () => new Chats(),
  '/password': () => new ChangePassword(),
};
