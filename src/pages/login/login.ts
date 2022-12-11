import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import { ValidateType } from 'helpers/validate/const';
import { validateForm } from 'helpers/validate/validate-form';

import { withStore } from 'HOCs/with-store';
import { withRouter } from 'HOCs/with-router';

import AuthController from 'controllers/auth-conroller';

import type { Router } from 'router/router';
import type { Store } from 'store/store';

import './login.pcss';

const authController = new AuthController();

type LoginProps = {
  onFocus: (evt: FocusEvent) => void;
  onBlur: (evt: FocusEvent) => void;
  onClick: (evt: Event) => void;
  onRegisterButtonClick: () => void;
  router: Router;
  store: Store;
};

export class Login extends Component<LoginProps> {
  static componentName = ComponentName.Login;
  _errors: string[];

  constructor(props: LoginProps) {
    super(props);

    this._errors = [];

    this.setProps({
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onClick: this.onSubmit,
      onRegisterButtonClick: () => props.router.go(`/register`),
    });
  }

  private onFocus = (evt: FocusEvent): void => this.validate(evt);
  private onBlur = (evt: FocusEvent): void => this.validate(evt);
  private onSubmit = (evt: Event): void => {
    evt.preventDefault();
    this._errors = [];

    const currentRefNames = Object.keys(this.refs);

    this._errors = currentRefNames.filter((refName) => {
      const value = this.refs[refName].element?.querySelector(`input`)?.value;
      const errorRef = this.refs[refName].refs.errorRef;

      const text = validateForm({
        type: refName as ValidateType,
        value: value as string,
      });

      if (text !== ``) {
        errorRef.setProps({ text });
        return text;
      }
    });

    if (this._errors.length === 0) {
      const login = (
        this.refs.login.element!.querySelector(`input`) as HTMLInputElement
      ).value;
      const password = (
        this.refs.password.element!.querySelector(`input`) as HTMLInputElement
      ).value;

      authController.login({ login, password });
    }
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
              {{{ Button text="Авторизоваться" className="login__button" type="submit" onClick=onClick }}}
            </form>
            {{{ Button text="Нет аккаунта?" className="login__link" type="submit" onClick=onRegisterButtonClick }}}
          </section>
        </div>
      </main>`;
  }
}

export default withRouter(withStore(Login));
