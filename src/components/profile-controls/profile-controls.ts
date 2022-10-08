import Component from 'core/component';

import './profile-controls.pcss';

export class ProfileControls extends Component {
  static componentName = `ProfileControls`;

  protected render() {
    return `
      <div class="profile-controls">
        <button type="button" class="profile-controls__button">Изменить данные</button>
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
