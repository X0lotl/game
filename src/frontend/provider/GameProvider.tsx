import { FC, PropsWithChildren, useReducer, useState } from 'react';
import { GameContextProvider } from '@/frontend/context/GameContext';
import { gameReducer } from '@/frontend/store/game/game.reducer';
import { useMakeDispatcher } from '@/frontend/store/game/game.hooks/useMakeDispatcher';
import { ActionType } from '@/frontend/store/game/game.typedefs';
import { GameStatus } from '@/frontend/types/game.typedefs';
import { GAME_INITIAL_STATE } from '@/frontend/store/game/game.constants';

export const GameProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  const [status, setStatus] = useState(GameStatus.Start);
  const [{ xp, money }, dispatch] = useReducer(gameReducer, GAME_INITIAL_STATE);

  const increaseXp = useMakeDispatcher(dispatch, ActionType.Increase, 'xp');
  const decreaseXp = useMakeDispatcher(dispatch, ActionType.Decrease, 'xp');
  const increaseMoney = useMakeDispatcher(dispatch, ActionType.Increase, 'money');
  const decreaseMoney = useMakeDispatcher(dispatch, ActionType.Decrease, 'money');

  return (
    <GameContextProvider
      xp={xp}
      money={money}
      status={status}
      increaseXp={increaseXp}
      decreaseXp={decreaseXp}
      increaseMoney={increaseMoney}
      decreaseMoney={decreaseMoney}
      setStatus={setStatus}
    >
      {children}
    </GameContextProvider>
  )
}
