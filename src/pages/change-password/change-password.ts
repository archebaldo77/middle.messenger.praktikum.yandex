import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import './change-password.pcss';

export class ChangePassword extends Component {
  static componentName = ComponentName.ChangePassword;

  protected render() {
    return `
      <main class="change-password-page">
        <div class="change-password-page__container">
          {{{ ChangePasswordForm }}}
          {{{ LinkBack }}}
        </div>
     </main>
    `;
  }
}
