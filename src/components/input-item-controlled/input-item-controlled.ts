import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import './input-item-controlled.pcss';

export class InputItemControlled extends Component {
  static componentName = ComponentName.InputItemControlled;

  protected render() {
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
