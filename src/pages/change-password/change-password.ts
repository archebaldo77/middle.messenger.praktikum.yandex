import Component from 'core/component';

import './change-password.pcss';

export class ChangePassword extends Component {
  render() {
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
