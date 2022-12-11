import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import { ValidateType } from 'helpers/validate/const';
import { validateForm } from 'helpers/validate/validate-form';

import { withRouter } from 'HOCs/with-router';
import { withStore } from 'HOCs/with-store';

import UserController from 'controllers/user-controller';

import './profile-form.pcss';

import type { Store } from 'store/store';

const userController = new UserController();

type ProfileFormProps = UserData & {
  onFocus: (evt: FocusEvent) => void;
  onBlur: (evt: FocusEvent) => void;
  onSubmit: (evt: Event) => void;
  onChangeAvatar: () => void;
  store: Store;
};

export class ProfileForm extends Component<ProfileFormProps> {
  static componentName = ComponentName.ProfileForm;
  _errors: string[];

  constructor(props: ProfileFormProps) {
    super(props);

    this._errors = [];

    this.setProps({
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onSubmit: this.onSubmit,
      onChangeAvatar: () => {
        const input = this.refs.avatar.element?.querySelector(`input`);
        const file = input?.files[0];
        const formData = new FormData();
        formData.append(`avatar`, file);

        if (input?.files) {
          userController.changeUserAvatar(formData);
        }
      },
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
      const email = (
        this.refs.email.element!.querySelector(`input`) as HTMLInputElement
      ).value;
      const login = (
        this.refs.login.element!.querySelector(`input`) as HTMLInputElement
      ).value;
      const first_name = (
        this.refs.firstName.element!.querySelector(`input`) as HTMLInputElement
      ).value;
      const second_name = (
        this.refs.secondName.element!.querySelector(`input`) as HTMLInputElement
      ).value;
      const display_name = (
        this.refs.displayName.element!.querySelector(
          `input`
        ) as HTMLInputElement
      ).value;
      const phone = (
        this.refs.phone.element!.querySelector(`input`) as HTMLInputElement
      ).value;

      userController.changeUserData({
        email,
        login,
        first_name,
        second_name,
        display_name,
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
      <section class="profile">
        <form class="profile-form">
          <div class="profile-avatar">
            ${
              this.props.avatar
                ? `<img src="https://ya-praktikum.tech/api/v2/resources{{avatar}}" alt="avatar">`
                : `<div class="profile-avatar__mock"></div>`
            }
            <p class="profile-avatar__name">${this.props.first_name}</p>
            {{{ InputItemControlled
                  type="file"
                  name="avatar"
                  placeholder="Выберите аватар"
                  className="input-item--avatar"
                  ref="avatar"
            }}}
            {{{ Button text="Сохранить" onClick=onChangeAvatar type="button" className="profile-form__save" }}}
          </div>
          <fieldset class="profile-fieldset">
            <div class="profile-field">
              <span class="profile-field__title">Почта</span>
              {{{ InputItemControlled
                    value=email
                    type="email"
                    name="email"
                    placeholder="pochta@yandex.ru"
                    className="input-item--profile-email profile-field__input"
                    onFocus=onFocus
                    onBlur=onBlur
                    ref="email"
              }}}
            </div>
            <div class="profile-field">
              <span class="profile-field__title">Логин</span>
              {{{ InputItemControlled
                    value=login
                    type="text"
                    name="login"
                    placeholder="ivanivanov"
                    className="input-item--profile-login profile-field__input"
                    onFocus=onFocus
                    onBlur=onBlur
                    ref="login"
              }}}
            </div>
            <div class="profile-field">
              <span class="profile-field__title">Имя</span>
              {{{ InputItemControlled
                    value=first_name
                    type="text"
                    name="firstName"
                    placeholder="Иван"
                    className="input-item--profile-name profile-field__input"
                    onFocus=onFocus
                    onBlur=onBlur
                    ref="firstName"
              }}}
            </div>
            <div class="profile-field">
              <span class="profile-field__title">Фамилия</span>
              {{{ InputItemControlled
                    value=second_name
                    type="text"
                    name="secondName"
                    placeholder="Иванов"
                    className="input-item--profile-surname profile-field__input"
                    onFocus=onFocus
                    onBlur=onBlur
                    ref="secondName"
              }}}
            </div>
            <div class="profile-field">
              <span class="profile-field__title">Имя в чате</span>
              {{{ InputItemControlled
                    value=display_name
                    type="text"
                    name="displayName"
                    placeholder="Ivan"
                    className="input-item--profile-nickname profile-field__input"
                    onFocus=onFocus
                    onBlur=onBlur
                    ref="displayName"
              }}}
            </div>
            <div class="profile-field">
              <span class="profile-field__title">Телефон</span>
              {{{ InputItemControlled
                    value=phone
                    type="tel"
                    name="phone"
                    placeholder="+7 (909) 967 30 30"
                    className="input-item--profile-phone profile-field__input"
                    onFocus=onFocus
                    onBlur=onBlur
                    ref="phone"
              }}}
            </div>
          </fieldset>
          {{{ ProfileControls onSubmit=onSubmit }}}
        </form>
      </section>
    `;
  }
}

type PartialState = {
  user: {
    data: UserData;
  };
};

const mapStateToProps = (state: PartialState) => {
  return {
    email: state.user.data.email,
    login: state.user.data.login,
    first_name: state.user.data.first_name,
    second_name: state.user.data.second_name,
    display_name: state.user.data.display_name,
    phone: state.user.data.phone,
    avatar: state.user.data.avatar,
  };
};

export default withRouter(withStore(ProfileForm, mapStateToProps));
