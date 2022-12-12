import { expect } from 'chai';

import Component from './component';

class TestComponent extends Component<AnyProps> {}

describe('Component test cases', () => {
  it('Test', () => {
    expect(TestComponent).to.be.not.null;
  });
});
