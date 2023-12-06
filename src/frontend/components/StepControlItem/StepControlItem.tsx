import { memo } from 'react';
import { Button, ButtonMode } from '@/frontend/ui/Button/Button';
import { StepControl } from '@/frontend/components/StepControlItem/StepControlItem.typedefs';

type BaseProps = StepControl;

interface Props extends BaseProps {
  mode: ButtonMode;
}

function StepControlItem(props: Props) {
  const {
    title,
    onClick,
  } = props;

  return (
    <Button
      title={title}
      onClick={onClick}
    />
  );
}

export default memo(StepControlItem);
