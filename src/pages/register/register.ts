import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import { ValidateType } from 'helpers/validate/const';
import { validateForm } from 'helpers/validate/validate-form';

import './register.pcss';

export class Register extends Component {
  static componentName = ComponentName.Register;

  constructor() {
    super();

    this.setProps({
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onClick: this.onSubmit,
    });
  }

  private onFocus = (evt: FocusEvent): void => this.validate(evt);
  private onBlur = (evt: FocusEvent): void => this.validate(evt);
  private onSubmit = (): void => {
    const currentRefNames = Object.keys(this.refs);

    currentRefNames.forEach((refName) => {
      const value = this.refs[refName].element?.querySelector(`input`)?.value;
      const errorRef = this.refs[refName].refs.errorRef;

      const text = validateForm({
        type: refName as ValidateType,
        value: value as string,
      });

      errorRef.setProps({ text });

      console.log(refName, value);
    });
  };

  private validate = (evt: FocusEvent): void => {
    const target = evt.target as HTMLInputElement;
    const currentRefName = target.name;
    const errorRef = this.refs[currentRefName].refs.errorRef;

    const text = validateForm({
      type: target.name as ValidateType,
      value: target.value,
    });

    errorRef.setProps({ text });
  };

  protected render() {
    return `
      <main class="register-page">
        <div class="register-page__container">
          <section class="register">
            <p class="register__text">Регистрация</p>
            <form class="register__form">
                {{{ InputItemControlled
                    type="email"
                    name="email"
                    placeholder="Почта"
                    className="input-item--register register__input-item"
                    onFocus=onFocus
                    onBlur=onBlur
                    ref="email"
                }}}
                {{{ InputItemControlled
                    type="text"
                    name="login"
                    placeholder="Логин"
                    className="input-item--register register__input-item"
                    onFocus=onFocus
                    onBlur=onBlur
                    ref="login"
                }}}
                {{{ InputItemControlled
                    type="text"
                    name="firstName"
                    placeholder="Имя"
                    className="input-item--register register__input-item"
                    onFocus=onFocus
                    onBlur=onBlur
                    ref="firstName"
                }}}
                {{{ InputItemControlled
                    type="text"
                    name="secondName"
                    placeholder="Фамилия"
                    className="input-item--register register__input-item"
                    onFocus=onFocus
                    onBlur=onBlur
                    ref="secondName"
                }}}
                {{{ InputItemControlled
                    type="tel"
                    name="phone"
                    placeholder="Телефон"
                    className="input-item--register register__input-item"
                    onFocus=onFocus
                    onBlur=onBlur
                    ref="phone"
                }}}
                {{{ InputItemControlled
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    className="input-item--register register__input-item"
                    onFocus=onFocus
                    onBlur=onBlur
                    ref="password"
                }}}
                {{{ InputItemControlled
                    type="password"
                    name="passwordRepeat"
                    placeholder="Пароль еще раз"
                    className="input-item--register register__input-item"
                    onFocus=onFocus
                    onBlur=onBlur
                    ref="passwordRepeat"
                }}}
                {{{ Button text="Зарегистрироваться" className="register__button" type="button" onClick=onClick }}}
            </form>
            <a href="/chats" class="register__link">Войти</a>
          </section>
        </div>
      </main>
    `;
  }
}
