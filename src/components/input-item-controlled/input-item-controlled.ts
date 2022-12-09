import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import './input-item-controlled.pcss';

export default class InputItemControlled extends Component<AnyProps> {
  static componentName = ComponentName.InputItemControlled;

  protected render() {
    return `
      <div class="input-item-controlled">
      {{#if value}}
        {{{ InputItem
          type="{{type}}"
          name="{{name}}"
          placeholder="{{placeholder}}"
          className="{{className}}"
          value="{{value}}"
          onFocus=onFocus
          onBlur=onBlur
        }}}
        {{{ ErrorMessage ref="errorRef" text=error }}}
      {{else}}
        {{{ InputItem
          type="{{type}}"
          name="{{name}}"
          placeholder="{{placeholder}}"
          className="{{className}}"
          onFocus=onFocus
          onBlur=onBlur
        }}}
        {{{ ErrorMessage ref="errorRef" text=error }}}
      {{/if}}
      </div>
    `;
  }
}
