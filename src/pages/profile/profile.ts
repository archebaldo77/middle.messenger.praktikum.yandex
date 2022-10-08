import Component from 'core/component';

import './profile.pcss';

export class Profile extends Component {
  static componentName = `Profile`;

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
