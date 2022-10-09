import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import './search.pcss';

export class Search extends Component {
  static componentName = ComponentName.Search;

  protected render() {
    return `
      <section class="search">
        <a href="/profile" class="profile-link">Профиль</a>
        {{{ SearchBar }}}
      </section>
    `;
  }
}
