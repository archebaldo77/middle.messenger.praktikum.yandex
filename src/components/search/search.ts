import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import { withRouter } from 'HOCs/with-router';

import type { Router } from 'router/router';

import './search.pcss';

type SearchProps = {
  router: Router;
  onProfileClick: () => void;
};

export class Search extends Component<SearchProps> {
  static componentName = ComponentName.Search;

  constructor(props: SearchProps) {
    super(props);

    this.setProps({
      onProfileClick: () => props.router.go(`/profile`),
    });
  }

  protected render() {
    return `
      <section class="search">
        {{{ Button text="Профиль" className="profile-link" onClick=onProfileClick}}}
      </section>
    `;
  }
}

export default withRouter(Search);
