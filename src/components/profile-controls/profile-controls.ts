import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import './profile-controls.pcss';

export class ProfileControls extends Component {
  static componentName = ComponentName.ProfileControls;

  protected render() {
    return `
      <div class="profile-controls">
      {{{ Button text="Изменить данные" className="profile-controls__button" type="button" onClick=onClick }}}
        <a
          href="/"
          class="profile-controls__link"
        >Изменить пароль</a>
        <a
          href="/"
          class="profile-controls__link profile-controls__link--exit"
        >Выйти</a>
      </div>
    `;
  }
}
