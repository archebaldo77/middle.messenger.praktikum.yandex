require('babel-core/register');

import registerComponent from 'core/register-component';

import { Store } from 'store/store';
import { Router } from 'router/router';

import { initialState } from 'store/initial-state';
import { initRouter } from 'router/routes';

import AuthController from 'controllers/auth-conroller';

import 'styles/style.pcss';

import { allComponents } from 'components/all-components/all-components';
import { allPages } from 'pages/all-pages/all-pages';

const authController = new AuthController();

allComponents.forEach((Component: any) => registerComponent(Component));
allPages.forEach((Page: any) => registerComponent(Page));

declare global {
  interface Window {
    router: Router;
    store: Store<typeof initialState>;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.store = new Store(initialState);
  window.router = new Router();

  initRouter(window.router, window.store, authController.init);
});
