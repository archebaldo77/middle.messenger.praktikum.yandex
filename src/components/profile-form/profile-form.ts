import Component from 'core/component';

import { ComponentName } from 'helpers/const';
import { ValidateType } from 'helpers/validate/const';

import { validateForm } from 'helpers/validate/validate-form';

import './profile-form.pcss';

export class ProfileForm extends Component {
  static componentName = ComponentName.ProfileForm;

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
      <section class="profile">
        <form class="profile-form">
          <div class="profile-avatar">
            <img src="https://www.fillmurray.com/130/130" alt="avatar">
            <p class="profile-avatar__name">Вадим</p>
            {{{ InputItemControlled
                  type="file"
                  name="avatar"
                  placeholder=""
                  className="input-item--avatar"
            }}}
          </div>
          <fieldset class="profile-fieldset">
            <div class="profile-field">
              <span class="profile-field__title">Почта</span>
              {{{ InputItemControlled
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
          {{{ ProfileControls onClick=onClick}}}
        </form>
      </section>
    `;
  }
}
