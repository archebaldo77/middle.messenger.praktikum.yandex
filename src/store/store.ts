import EventBus from 'core/event-bus';

import { initialState } from './initial-state';

export type Dispatch<State> = (
  next: Partial<State> | Action<State>,
  payload?: any
) => void;

export type Action<State> = (
  dispatch: Dispatch<State>,
  state: State,
  payload: any
) => void;

export class Store<
  State extends Record<string, any> = typeof initialState
> extends EventBus {
  private state: State = {} as State;

  constructor(defaultState: State) {
    super();

    this.state = defaultState;
    this.set(defaultState);
  }

  public getState() {
    return this.state;
  }

  public set(nextState: Partial<State>) {
    const prevState = { ...this.state };
    this.state = { ...this.state, ...nextState };
    this.emit('changed', prevState, nextState);
  }

  public dispatch(next: Partial<State> | Action<State>, payload?: any) {
    if (typeof next === 'function') {
      next(this.dispatch.bind(this), this.state, payload);
    } else {
      this.set({ ...this.state, ...next });
    }
  }
}
