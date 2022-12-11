import Component from 'core/component';

import { ComponentName } from 'helpers/const';
import { validatePassword } from 'helpers/validate/validate-password';

import { withStore } from 'HOCs/with-store';

import UserController from 'controllers/user-controller';

import type { Store } from 'store/store';

import './change-password-form.pcss';

const userController = new UserController();

type ChangePasswordFormProps = {
  onFocus: (evt: FocusEvent) => void;
  onBlur: (evt: FocusEvent) => void;
  onSubmit: (evt: FocusEvent) => void;
  avatar: Nullable<string>;
  name: string;
  store: Store;
};

export class ChangePasswordForm extends Component<ChangePasswordFormProps> {
  static componentName = ComponentName.ChangePasswordForm;

  _errors: string[];

  constructor(props: ChangePasswordFormProps) {
    super(props);

    this._errors = [];

    this.setProps({
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onSubmit: this.onSubmit,
    });
  }

  private onFocus = (evt: FocusEvent): void => this.validate(evt);
  private onBlur = (evt: FocusEvent): void => this.validate(evt);
  private onSubmit = (evt: Event): void => {
    evt.preventDefault();
    this._errors = [];

    const currentRefNames = Object.keys(this.refs);

    this._errors = currentRefNames.filter((refName) => {
      const value = (
        this.refs[refName].element!.querySelector(`input`) as HTMLInputElement
      )?.value;
      const errorRef = this.refs[refName].refs.errorRef;

      const text = validatePassword(value);

      if (text !== ``) {
        errorRef.setProps({ text });
        return text;
      }
    });

    if (this._errors.length === 0) {
      const oldPassword = (
        this.refs.oldPassword.element!.querySelector(
          `input`
        ) as HTMLInputElement
      ).value;
      const newPassword = (
        this.refs.newPassword.element!.querySelector(
          `input`
        ) as HTMLInputElement
      ).value;

      userController.changeUserPassword(oldPassword, newPassword);
    }
  };

  private validate = (evt: Event): void => {
    const target = evt.target as HTMLInputElement;
    const currentRefName = target.name;
    const errorRef = this.refs[currentRefName].refs.errorRef;

    const text = validatePassword(target.value);
    errorRef.setProps({ text });
  };

  protected render() {
    return `
      <section class="change-password">
        <div class="profile-avatar change-password__avatar">
        ${
          this.props.avatar
            ? `<img src="https://ya-praktikum.tech/api/v2/resources/${this.props.avatar}" alt="avatar">`
            : `<div class="profile-avatar__mock"></div>`
        }
          <p class="profile-avatar__name">${this.props.name}</p>
        </div>
        <form class="change-password-form">
          <div class="change-password-field">
            <span class="chnage-password-field__title">Старый пароль</span>
            {{{ InputItemControlled
                type="password"
                name="oldPassword"
                placeholder="*****"
                className="change-password__input-item"
                onFocus=onFocus
                onBlur=onBlur
                ref="oldPassword"
            }}}
          </div>
          <div class="change-password-field">
            <span class="chnage-password-field__title">Новый пароль</span>
            {{{ InputItemControlled
                type="password"
                name="newPassword"
                placeholder="********"
                className="change-password__input-item"
                onFocus=onFocus
                onBlur=onBlur
                ref="newPassword"
            }}}
          </div>
          <div class="change-password-field">
            <span class="chnage-password-field__title">Повторите новый пароль</span>
            {{{ InputItemControlled
                type="password"
                name="repeatPassword"
                placeholder="********"
                className="change-password__input-item"
                onFocus=onFocus
                onBlur=onBlur
                ref="repeatPassword"
            }}}
          </div>
          {{{ Button text="Сохранить" type="button" className="change-password__submit" onClick=onSubmit }}}
        </form>
      </section>
    `;
  }
}

type PartialState = {
  user: {
    data: {
      avatar: Nullable<string>;
      first_name: string;
    };
  };
};

const mapStateToProps = (state: PartialState) => {
  return {
    avatar: state.user.data.avatar,
    name: state.user.data.first_name,
  };
};

export default withStore(ChangePasswordForm, mapStateToProps);
