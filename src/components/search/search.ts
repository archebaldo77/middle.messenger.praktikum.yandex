import Component from 'core/component';

import './search.pcss';

export class Search extends Component {
  protected render() {
    return `
      <section class="search">
        <a href="/" class="profile-link">Профиль</a>
        {{{ SearchBar }}}
      </section>
    `;
  }
}
