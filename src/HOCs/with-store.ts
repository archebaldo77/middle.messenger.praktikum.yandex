import { Store } from 'store/store';

import type { initialState } from 'store/initial-state';

type WithStateProps = { store: Store<typeof initialState> };

export function withStore<P extends WithStateProps>(
  WrappedBlock: any,
  mapStateToProps: any = () => undefined
) {
  return class extends WrappedBlock<P> {
    public static componentName =
      WrappedBlock.componentName || WrappedBlock.name;

    constructor(props: P) {
      super({
        ...props,
        ...mapStateToProps(window.store.getState()),
        store: window.store,
      });

      window.store.on('changed', this.__onChangeStoreCallback);
    }

    __onChangeStoreCallback = () => {
      this.setProps({
        ...this.props,
        ...mapStateToProps(window.store.getState()),
        store: window.store,
      });
    };

    componentWillUnmount() {
      super.componentWillUnmount();
      window.store.off('changed', this.__onChangeStoreCallback);
    }
  };
}
