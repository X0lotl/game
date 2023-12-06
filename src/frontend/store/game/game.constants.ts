import { State } from '@/frontend/store/game/game.typedefs';

export const MAX_XP_VALUE = 100;

export const INITIAL_MONEY_VALUE = 150;

export const GAME_INITIAL_STATE: State = {
  xp: MAX_XP_VALUE,
  money: INITIAL_MONEY_VALUE,
}
