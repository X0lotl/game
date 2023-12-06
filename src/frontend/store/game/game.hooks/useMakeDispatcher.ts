import { Dispatch, useCallback } from 'react';
import { Action, ActionType, State } from '@/frontend/store/game/game.typedefs';

export const useMakeDispatcher = (
  dispatch: Dispatch<Action>,
  type: ActionType,
  key: keyof State,
) => {
  return useCallback((amount: number) => {
    dispatch({
      type,
      key,
      amount
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
