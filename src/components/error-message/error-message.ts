import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import './error-message.pcss';

export default class ErrorMessage extends Component<AnyProps> {
  static componentName = ComponentName.ErrorMessage;

  protected render() {
    return `
    <p class="error-message">
      {{#if text}}
        {{text}}
      {{/if}}
    </p>
    `;
  }
}
