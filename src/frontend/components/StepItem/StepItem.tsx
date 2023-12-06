import { FC, memo } from 'react';
import { StepControl } from '@/frontend/components/StepControlItem/StepControlItem.typedefs';

interface Props {
  videoSrc: string;
  isLooping?: boolean;
  controls?: StepControl[];
}

export const StepItem: FC<Props> = (props) => {
  const {
    videoSrc,
  } = props;

  return null;
};
