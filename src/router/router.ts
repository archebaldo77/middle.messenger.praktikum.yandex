export class Router {
  _routes: Record<string, () => void>;
  _prevRoute: null | string;

  constructor() {
    this._prevRoute = null;
    this._routes = {};
  }

  private _onRouteChange = () => {
    const { pathname } = window.location;

    const activePathname = Object.keys(this._routes).find(
      (path) => path === pathname
    );

    if (this._prevRoute === activePathname) {
      return;
    }

    if (activePathname !== undefined) {
      this._prevRoute = activePathname;
      this._routes[activePathname]();

      return;
    }

    if (typeof this._routes[`*`] === `function`) {
      this._routes[`*`]();

      return;
    }
  };

  start() {
    window.addEventListener(`popstate`, this._onRouteChange);
    this._onRouteChange();
  }

  use(pathname: string, cb: () => void) {
    this._routes[pathname] = cb;

    return this;
  }

  go(pathname: string) {
    if (this._prevRoute === pathname) {
      return;
    }

    window.history.pushState({}, ``, pathname);
    this._onRouteChange();
  }

  back() {
    window.history.back();
  }

  forward() {
    window.history.forward();
  }
}
