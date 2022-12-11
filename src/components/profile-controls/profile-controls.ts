import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import { withRouter } from 'HOCs/with-router';
import { withStore } from 'HOCs/with-store';

import AuthController from 'controllers/auth-conroller';

import './profile-controls.pcss';

import type { Router } from 'router/router';
import type { Store } from 'store/store';

const authController = new AuthController();

type ProfileControlsProps = {
  onChangePasswordClick: () => void;
  onExitClick: () => void;
  router: Router;
  store: Store;
};

export class ProfileControls extends Component<ProfileControlsProps> {
  static componentName = ComponentName.ProfileControls;

  constructor(props: ProfileControlsProps) {
    super(props);

    this.setProps({
      onChangePasswordClick: () => this.props.router.go(`/password`),
      onExitClick: () => authController.logout(),
    });
  }

  protected render() {
    return `
      <div class="profile-controls">
        {{{ Button text="Изменить данные" className="profile-controls__button" type="button" onClick=onSubmit }}}
        {{{ Button text="Изменить пароль" className="profile-controls__link" type="button" onClick=onChangePasswordClick }}}
        {{{ Button text="Выйти" className="profile-controls__link profile-controls__link--exit" type="button" onClick=onExitClick }}}
      </div>
    `;
  }
}

export default withRouter(withStore(ProfileControls));
