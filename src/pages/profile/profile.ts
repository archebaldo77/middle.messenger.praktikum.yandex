import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import './profile.pcss';

export class Profile extends Component {
  static componentName = ComponentName.Profile;

  protected render() {
    return `
      <main class="profile-page">
        <div class="profile-page__container">
          {{{ ProfileForm }}}
        </div>
        {{{ LinkBack }}}
      </main>
    `;
  }
}
