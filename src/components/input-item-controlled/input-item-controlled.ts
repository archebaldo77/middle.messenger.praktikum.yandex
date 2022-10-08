import Component from 'core/component';

import './input-item-controlled.pcss';

export class InputItemControlled extends Component {
  render() {
    return `
      <div class="input-item-controlled">
        {{{ InputItem
          type="{{type}}"
          name="{{name}}"
          placeholder="{{placeholder}}"
          className="{{className}}"
          onFocus=onFocus
          onBlur=onBlur
        }}}
        {{{ ErrorMessage ref="errorRef" text=error }}}
      </div>
    `;
  }
}
