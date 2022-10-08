import Component from 'core/component';

import './error-message.pcss';

export class ErrorMessage extends Component {
  render() {
    return `
    <p class="error-message">
      {{#if text}}
        {{text}}
      {{/if}}
    </p>
    `;
  }
}
