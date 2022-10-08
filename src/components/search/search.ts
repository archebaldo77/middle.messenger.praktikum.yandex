import Component from 'core/component';

import './search.pcss';

export class Search extends Component {
  static componentName = `Search`;

  protected render() {
    return `
      <section class="search">
        <a href="/profile" class="profile-link">Профиль</a>
        {{{ SearchBar }}}
      </section>
    `;
  }
}
