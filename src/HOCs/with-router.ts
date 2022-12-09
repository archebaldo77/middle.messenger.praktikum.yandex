import { Router } from 'router/router';

type WithRouterProps = { router: Router };

export function withRouter<P extends WithRouterProps>(WrappedBlock: any) {
  return class extends WrappedBlock<P> {
    public static componentName =
      WrappedBlock.componentName || WrappedBlock.name;

    constructor(props: P) {
      super({ ...props, router: window.router });
    }
  };
}
