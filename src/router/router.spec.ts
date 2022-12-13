import { expect } from 'chai';
import { Router } from './router';

let router: Router;

describe('Router tests cases', () => {
  before(() => {
    router = new Router();
    router.use(`/`, () => `<div></div>`);
  });

  it('should return correctly private field', () => {
    expect(router).to.have.property(`_prevRoute`);
    expect(router).to.have.property(`_routes`);
  });

  it('should return right path on start', () => {
    router.start();

    expect(router._prevRoute).to.be.equal(`/`);
  });

  it('should go to path', () => {
    router.go('/home');

    const { pathname } = window.location;

    expect(pathname).to.be.equal('/home');
  });
});
