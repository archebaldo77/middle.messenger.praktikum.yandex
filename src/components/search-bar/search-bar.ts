import Component from 'core/component';

import './search-bar.pcss';

export class SearchBar extends Component {
  protected render() {
    return `
      <div class="search-bar">
        {{{ InputItem type="text" name="search" placeholder="Поиск" className="input-item--search"}}}
      </div>
    `;
  }
}
