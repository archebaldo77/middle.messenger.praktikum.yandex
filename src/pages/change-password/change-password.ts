import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import { withRouter } from 'HOCs/with-router';

import type { Router } from 'router/router';

import './change-password.pcss';

type ChangePasswordProps = {
  router: Router;
  onClickBack: () => void;
};

export class ChangePassword extends Component<ChangePasswordProps> {
  static componentName = ComponentName.ChangePassword;

  constructor(props: ChangePasswordProps) {
    super(props);

    this.setProps({
      onClickBack: () => this.props.router.go(`/profile`),
    });
  }

  protected render() {
    return `
      <main class="change-password-page">
        <div class="change-password-page__container">
          {{{ ChangePasswordForm }}}
          {{{ LinkBack onClick=onClickBack }}}
        </div>
     </main>
    `;
  }
}

export default withRouter(ChangePassword);
