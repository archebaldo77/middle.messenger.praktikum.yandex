import { expect } from 'chai';

import Component from './component';

class TestComponent extends Component<AnyProps> {
  render() {
    return `<div class="test">Test</div>`;
  }
}

const component = new TestComponent();

describe('Component test cases', () => {
  it('should render right markup', () => {
    expect(component?.render()).to.eq(`<div class="test">Test</div>`);
  });
});
