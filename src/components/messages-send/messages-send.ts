import Component from 'core/component';

import { ComponentName } from 'helpers/const';

import './messages-send.pcss';

type MessagesSendProps = {
  onClick: () => void;
};

type ComponentProps = {
  events: {
    click: () => void;
  };
};

export default class MessagesSend extends Component<
  MessagesSendProps & ComponentProps
> {
  static componentName = ComponentName.MessagesSend;

  constructor(props: MessagesSendProps) {
    super({ ...props, events: { click: props.onClick } });
  }

  protected render() {
    return `
      <button type='button' class='messages-send'>
        <svg
          width='13'
          height='12'
          viewBox='0 0 13 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect y='5.19995' width='11' height='1.6' fill='white'></rect>
          <path d='M7 1L11 6L7 11' stroke='white' stroke-width='1.6'></path>
        </svg>
      </button>
    `;
  }
}
