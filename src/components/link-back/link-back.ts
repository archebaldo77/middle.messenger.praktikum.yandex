import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import './link-back.pcss';

type ComponentProps = {
  events: {
    click: () => void;
  };
};

type LinkBackProps = {
  onClick: () => void;
};

export default class LinkBack extends Component<ComponentProps> {
  constructor(props: LinkBackProps) {
    super({
      ...props,
      events: {
        click: props.onClick,
      },
    });
  }
  static componentName = ComponentName.LinkBack;

  protected render() {
    return `
    <a class="link-back">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="14" transform="rotate(-180 14 14)" fill="#3369F3"/>
        <rect x="20" y="14.8" width="11" height="1.6" transform="rotate(-180 20 14.8)" fill="white"/>
        <path d="M13 19L9 14L13 9" stroke="white" stroke-width="1.6"/>
      </svg>
    </a>
    `;
  }
}
