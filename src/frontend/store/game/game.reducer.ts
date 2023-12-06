import { ActionType, Reducer } from '@/frontend/store/game/game.typedefs';

export const gameReducer: Reducer = (state, action) => {
  const {type, key, amount} = action;

  switch (type) {
    case ActionType.Increase: {
      return {
        ...state,
        [key]: state[key] + amount,
      };
    }
    case ActionType.Decrease: {
      return {
        ...state,
        [key]: state[key] - amount,
      };
    }
    default:
      throw new Error(`Unknown action type provided — ${type}`);
  }
}
