import Component from 'core/component';

import './messages-item.pcss';

type MessagesItemProps = {
  text: string;
  time: string;
  from?: string;
};

export class MessagesItem extends Component {
  constructor(props: MessagesItemProps) {
    super(props);
  }

  protected render() {
    return `
      {{#if from}}
        <section class="messages-item messages-item--from">
          <p class="messages-item__text">
            {{text}}
          </p>
          <time class="messages-item__time">{{time}}</time>
        </section>
        {{else}}
        <section class="messages-item messages-item--to">
          <p class="messages-item__text">
            {{text}}
          </p>
          <div class="messages-item__status">
            <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="-0.5"
                x2="3.765"
                y2="-0.5"
                transform="matrix(0.705933 0.708278 -0.705933 0.708278 0.700195 2.33313)"
                stroke="#3369F3"
              ></line>
              <line
                y1="-0.5"
                x2="5.6475"
                y2="-0.5"
                transform="matrix(0.705933 -0.708278 0.705933 0.708278 3.35828 5.00006)"
                stroke="#3369F3"
              ></line>
            </svg>
          </div>
          <time class="messages-item__time">{{time}}</time>
        </section>
      {{/if}}
    `;
  }
}