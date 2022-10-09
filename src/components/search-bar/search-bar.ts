import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import './search-bar.pcss';

export class SearchBar extends Component {
  static componentName = ComponentName.SearchBar;

  protected render() {
    return `
      <div class="search-bar">
        {{{ InputItem type="text" name="search" placeholder="Поиск" className="input-item--search"}}}
      </div>
    `;
  }
}
