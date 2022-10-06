import Component from 'core/component';

import './profile-form.pcss';

export class ProfileForm extends Component {
  protected render() {
    return `
      <section class="profile">
        <form class="profile-form">
          <div class="profile-avatar">
            <img src="https://www.fillmurray.com/130/130" alt="avatar">
            <p class="profile-avatar__name">Вадим</p>
            {{{ InputItem
                type="file"
                name="avatar"
                placeholder=""
                className="input-item--avatar"
            }}}
          </div>
          <fieldset class="profile-fieldset" disabled>
            <div class="profile-field">
              <span class="profile-field__title">Почта</span>
              {{{ InputItem
                  type="email"
                  name="email"
                  placeholder="pochta@yandex.ru"
                  className="input-item--profile-email profile-field__input"
              }}}
            </div>
            <div class="profile-field">
              <span class="profile-field__title">Логин</span>
              {{{ InputItem
                  type="text"
                  name="login"
                  placeholder="ivanivanov"
                  className="input-item--profile-login profile-field__input"
              }}}
            </div>
            <div class="profile-field">
              <span class="profile-field__title">Имя</span>
              {{{ InputItem
                  type="text"
                  name="first_name"
                  placeholder="Иван"
                  className="input-item--profile-name profile-field__input"
              }}}
            </div>
            <div class="profile-field">
              <span class="profile-field__title">Фамилия</span>
              {{{ InputItem
                  type="text"
                  name="second_name"
                  placeholder="Иванов"
                  className="input-item--profile-surname profile-field__input"
              }}}
            </div>
            <div class="profile-field">
              <span class="profile-field__title">Имя в чате</span>
              {{{ InputItem
                  type="text"
                  name="display_name"
                  placeholder="Ivan"
                  className="input-item--profile-nickname profile-field__input"
              }}}
            </div>
            <div class="profile-field">
              <span class="profile-field__title">Телефон</span>
              {{{ InputItem
                  type="tel"
                  name="phone"
                  placeholder="+7 (909) 967 30 30"
                  className="input-item--profile-phone profile-field__input"
              }}}
            </div>
          </fieldset>
          {{{ ProfileControls }}}
        </form>
      </section>
    `;
  }
}
