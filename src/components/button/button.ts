import Component from 'core/component';

import './button.pcss';

type ButtonProps = {
  onClick: () => void;
  className?: string;
  text: string;
  type?: string;
};

type ComponentProps = ButtonProps & {
  events: {
    click: () => void;
  };
};

export class Button extends Component<ComponentProps> {
  static componentName = `Button`;

  constructor(props: ButtonProps) {
    super({
      ...props,
      events: {
        click: props.onClick,
      },
    });
  }

  protected render() {
    return `
      <button type="{{type}}" class="button {{className}}">{{text}}</button>
    `;
  }
}
