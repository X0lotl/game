import { memo } from 'react';
import { StepControl } from '@/frontend/components/StepControlItem/StepControlItem.typedefs';
import StepControlItem from '@/frontend/components/StepControlItem/StepControlItem';

interface Props {
  controls: StepControl[];
}

function StepControlList(props: Props) {
  const { controls } = props;

  return (
    <div>
      {controls.map(({ title, onClick }) => (
        <StepControlItem
          key={title}
          title={title}
          onClick={onClick}
        />
      ))}
    </div>
  );
}

export default memo(StepControlList);
