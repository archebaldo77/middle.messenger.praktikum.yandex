import Component from 'core/component';

import './input-item.pcss';

type InputItemProps = {
  type: string;
  name: string;
  placeholder: string;
  className: string;
};

export class InputItem extends Component {
  constructor(props: InputItemProps) {
    super(props);
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
