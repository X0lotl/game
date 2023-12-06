import { FC } from 'react';
import { useGameContext } from '@/frontend/context/GameContext';


const ProgressBar: FC = () => {
  const { xp, money } = useGameContext();

  return (
    <div className="flex justify-center flex-col bg-blue-400 w-[200px] h-[100px] px-6">
      <p className='uppercase font-bold'>XP: {xp}</p>

      <p className='uppercase font-bold'>Гроші: {money}</p>
    </div>
  );
};

export default ProgressBar;
