import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import { withRouter } from 'HOCs/with-router';

import type { Router } from 'router/router';

import './profile.pcss';

type ProfileProps = {
  router: Router;
  onClickBack: () => void;
};

export class Profile extends Component<ProfileProps> {
  static componentName = ComponentName.Profile;

  constructor(props: ProfileProps) {
    super(props);

    this.setProps({ onClickBack: () => this.props.router.go(`/chats`) });
  }

  protected render() {
    return `
      <main class="profile-page">
        <div class="profile-page__container">
          {{{ ProfileForm }}}
        </div>
        {{{ LinkBack onClick=onClickBack }}}
      </main>
    `;
  }
}

export default withRouter(Profile);
