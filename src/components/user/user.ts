import Component from 'core/component';

import './user.pcss';

export class User extends Component {
  protected render() {
    return `
      <div class="user">
        <section class="user-profile">
          <div class="user-profile__avatar">
          <img src="https://www.fillmurray.com/47/47" alt="avatar" />
          </div>
          <p class="user-profile__name">Вадим</p>
        </section>
        <div class="user__menu">
          <div class="user__dots">
          <svg
            width="3"
            height="16"
            viewBox="0 0 3 16"
            fill="#1E1E1E"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="1.5" cy="2" r="1.5" fill="inherit"></circle>
            <circle cx="1.5" cy="8" r="1.5" fill="inherit"></circle>
            <circle cx="1.5" cy="14" r="1.5" fill="inherit"></circle>
          </svg>
          </div>
        </div>
      </div>
    `;
  }
}
