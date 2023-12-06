import { FC, PropsWithChildren, useCallback, useReducer, useState } from 'react';
import { GameContextProvider } from '@/frontend/context/GameContext';
import { GameStatus } from '@/frontend/types/game.typedefs';
import { INITIAL_MONEY_VALUE, INITIAL_XP_VALUE } from '@/constants/state';

export const GameProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  const [xp, setXp] = useState(INITIAL_XP_VALUE);
  const [money, setMoney] = useState(INITIAL_MONEY_VALUE);
  const [status, setStatus] = useState(GameStatus.Start);

  const changeXp = useCallback((incomingXp: number) => {
    setXp((currentXp) => currentXp + incomingXp);
  }, []);

  const changeMoney = useCallback((incomingMoney: number) => {
    setMoney((currentMoney) => currentMoney + incomingMoney);
  }, []);

  return (
    <GameContextProvider
      xp={xp}
      money={money}
      status={status}
      changeXp={changeXp}
      changeMoney={changeMoney}
      setStatus={setStatus}
    >
      {children}
    </GameContextProvider>
  );
};
