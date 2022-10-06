import Component from 'core/component';

import './login.pcss';

export class Login extends Component {
  render() {
    return `
      <main class="login-page">
        <div class="login-page__container">
          <section class="login">
            <p class="login__text">Вход</p>
            <form class="login__form">
              {{{ InputItem
                  type="text"
                  name="login"
                  placeholder="Логин"
                  className="input-item--login login__input-item"
              }}}
              {{{ InputItem
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  className="input-item--login login__input-item"
              }}}
              <button type="button" class="login__button">Авторизоваться</button>
            </form>
            <a href="/register" class="login__link">Нет аккаунта?</a>
          </section>
        </div>
      </main>`;
  }
}
