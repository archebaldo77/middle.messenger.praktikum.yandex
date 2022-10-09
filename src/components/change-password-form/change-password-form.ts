import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import './change-password-form.pcss';

export class ChangePasswordForm extends Component {
  static componentName = ComponentName.ChangePasswordForm;

  protected render() {
    return `
      <section class="change-password">
        <div class="profile-avatar change-password__avatar">
          <img src="https://www.fillmurray.com/130/130" alt="avatar">
          <p class="profile-avatar__name">Вадим</p>
        </div>
        <form class="change-password-form">
          <div class="change-password-field">
            <span class="chnage-password-field__title">Старый пароль</span>
            {{{ InputItem
                type="password"
                name="oldPassword"
                placeholder="*****"
                className="change-password__input-item"
            }}}
          </div>
          <div class="change-password-field">
            <span class="chnage-password-field__title">Новый пароль</span>
            {{{ InputItem
                type="password"
                name="newPassword"
                placeholder="********"
                className="change-password__input-item"
            }}}
          </div>
          <div class="change-password-field">
            <span class="chnage-password-field__title">Повторите новый пароль</span>
            {{{ InputItem
                type="password"
                name="repeatPassword"
                placeholder="********"
                className="change-password__input-item"
            }}}
          </div>
          <button type="submit" class="change-password__submit">Сохранить</button>
        </form>
      </section>
    `;
  }
}
