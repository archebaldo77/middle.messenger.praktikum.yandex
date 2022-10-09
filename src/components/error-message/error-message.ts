import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import './error-message.pcss';

export class ErrorMessage extends Component {
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
