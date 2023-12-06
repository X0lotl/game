import { EventHandler, SyntheticEvent } from 'react';

export interface StepControl {
  title: string;
  onClick: EventHandler<SyntheticEvent<HTMLButtonElement>>;
}
