export interface State {
  xp: number;
  money: number;
}

export enum ActionType {
  Increase = 1,
  Decrease,
}

interface BaseAction {
  key: keyof State;
  amount: number;
}

interface IncreaseAction extends BaseAction {
  type: ActionType.Increase,
}

interface DecreaseAction extends BaseAction {
  type: ActionType.Decrease;
}

export type Action = IncreaseAction | DecreaseAction;

export type Reducer = (state: State, action: Action) => State;
