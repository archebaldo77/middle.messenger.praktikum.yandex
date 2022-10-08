import Component from 'core/component';

import './input-item.pcss';

type InputItemProps = {
  onFocus?: () => void;
  onBlur?: () => void;
  type: string;
  name: string;
  placeholder: string;
  className?: string;
};

type ComponentProps = InputItemProps & {
  events: {
    focus?: (evt: FocusEvent) => void;
    blur?: (evt: FocusEvent) => void;
  };
};

export class InputItem extends Component<ComponentProps> {
  static componentName = `InputItem`;

  constructor(props: InputItemProps) {
    super({
      ...props,
      events: {
        focus: props.onFocus,
        blur: props.onBlur,
      },
    });
  }

  protected render() {
    return `
      <input
        type="{{type}}"
        name="{{name}}"
        placeholder="{{placeholder}}"
        class="input-item {{className}}"
      />
    `;
  }
}
