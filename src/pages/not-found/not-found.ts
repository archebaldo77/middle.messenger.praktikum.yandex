import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import './not-found.pcss';

export default class NotFound extends Component<AnyProps> {
  static componentName = ComponentName.NotFound;

  protected render() {
    return `
      <main class="not-found">
        <p class="not-found__number">404</p>
        <p class="not-found__text">Page Not Found</p>
     </main>
    `;
  }
}
