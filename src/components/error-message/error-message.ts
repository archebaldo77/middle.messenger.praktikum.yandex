import Component from 'core/component';

import './error-message.pcss';

export class ErrorMessage extends Component {
  render() {
    return `
    {{#if text}}
      <p class="error-message">
        {{text}}
      </p>
    {{/if}}
    `;
  }
}
