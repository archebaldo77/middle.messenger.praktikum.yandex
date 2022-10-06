import Component from 'core/component';

import './register.pcss';

export class Register extends Component {
  render() {
    return `
      <main class="register-page">
        <div class="register-page__container">
          <section class="register">
            <p class="register__text">Регистрация</p>
            <form class="register__form">
                {{{ InputItem
                    type="email"
                    name="email"
                    placeholder="Почта"
                    className="input-item--register register__input-item"
                }}}
                {{{ InputItem
                    type="text"
                    name="login"
                    placeholder="Логин"
                    className="input-item--register register__input-item"
                }}}
                {{{ InputItem
                    type="text"
                    name="first_name"
                    placeholder="Имя"
                    className="input-item--register register__input-item"
                }}}
                {{{ InputItem
                    type="text"
                    name="second_name"
                    placeholder="Фамилия"
                    className="input-item--register register__input-item"
                }}}
                {{{ InputItem
                    type="tel"
                    name="phone"
                    placeholder="Телефон"
                    className="input-item--register register__input-item"
                }}}
                {{{ InputItem
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    className="input-item--register register__input-item"
                }}}
                {{{ InputItem
                    type="password"
                    name="password-repeat"
                    placeholder="Пароль еще раз"
                    className="input-item--register register__input-item"
                }}}
                <button type="button" class="register__button">Зарегистрироваться</button>
            </form>
            <a href="/" class="register__link">Войти</a>
          </section>
        </div>
      </main>
    `;
  }
}
