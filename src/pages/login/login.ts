import Component from 'core/component';

import { validateForm } from 'helpers/validate/validate-form';

import { ValidateType } from 'helpers/validate/const';

import './login.pcss';

export class Login extends Component {
  static componentName = `Login`;

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

  private validate = (evt: Event): void => {
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
      <main class="login-page">
        <div class="login-page__container">
          <section class="login">
            <p class="login__text">Вход</p>
            <form class="login__form">
              {{{ InputItemControlled
                    type="text"
                    name="login"
                    placeholder="Логин"
                    className="input-item--login login__input-item"
                    onFocus=onFocus
                    onBlur=onBlur
                    ref="login"
              }}}
              {{{ InputItemControlled
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    className="input-item--login login__input-item"
                    onFocus=onFocus
                    onBlur=onBlur
                    ref="password"
              }}}
              {{{ Button text="Авторизоваться" className="login__button" type="button" onClick=onClick }}}
            </form>
            <a href="/register" class="login__link">Нет аккаунта?</a>
          </section>
        </div>
      </main>`;
  }
}
