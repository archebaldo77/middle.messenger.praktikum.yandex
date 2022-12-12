import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import { ValidateType } from 'helpers/validate/const';
import { validateForm } from 'helpers/validate/validate-form';

import { withRouter } from 'HOCs/with-router';
import { withStore } from 'HOCs/with-store';

import UserController from 'controllers/user-controller';

import type { Router } from 'router/router';
import type { Store } from 'store/store';

import './register.pcss';

const userController = new UserController();

type RegisterProps = {
  onFocus: (evt: FocusEvent) => void;
  onBlur: (evt: FocusEvent) => void;
  onClick: (evt: FocusEvent) => void;
  onEnterClick: () => void;
  router: Router;
  store: Store;
};

export class Register extends Component<RegisterProps> {
  static componentName = ComponentName.Register;

  _errors: string[];

  constructor(props: RegisterProps) {
    super(props);

    this._errors = [];

    this.setProps({
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onClick: this.onSubmit,
      onEnterClick: () => this.props.router.go(`/`),
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
      const email = this.refs.email.element!.querySelector(`input`)!.value;
      const login = this.refs.login.element!.querySelector(`input`)!.value;
      const first_name =
        this.refs.firstName.element!.querySelector(`input`)!.value;
      const second_name =
        this.refs.secondName.element!.querySelector(`input`)!.value;
      const password =
        this.refs.password.element!.querySelector(`input`)!.value;
      const phone = this.refs.phone.element!.querySelector(`input`)!.value;

      userController.register({
        email,
        login,
        first_name,
        second_name,
        password,
        phone,
      });
    }
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
            {{{ Button text="Войти" className="register__link" onClick=onEnterClick }}}
          </section>
        </div>
      </main>
    `;
  }
}

export default withRouter(withStore(Register));
