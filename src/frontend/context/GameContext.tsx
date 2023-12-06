'use client';

import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useContext } from 'react';
import { emptyFunction } from '@/helpers/common.helpers';
import { GameStatus } from '@/frontend/types/game.typedefs';

interface Context {
  xp: number;
  money: number;
  status: GameStatus;
  changeXp: (_: number) => void;
  changeMoney: (_: number) => void;
  setStatus: Dispatch<SetStateAction<GameStatus>>;
}

type Props = PropsWithChildren<Context>;

type Hook = () => Context;

const GameContext = createContext<Context>({
  xp: 0,
  money: 0,
  status: GameStatus.Start,
  setStatus: emptyFunction,
  changeXp: emptyFunction,
  changeMoney: emptyFunction,
});

const GameContextProvider: FC<Props> = (props) => {
  const { children, ...value } = props;

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  )
}

const useGameContext: Hook = () => useContext(GameContext);

export {
  GameContextProvider,
  useGameContext,
};
