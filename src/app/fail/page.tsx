import Link from 'next/link';
import { FC } from 'react';
import { ROUTES } from '@/constants/routes';

const FailPage: FC = () => {
  return (
    <div className='flex flex-col items-center gap-6'>
      <span className='text-4xl font-bold text-red-600'>
        Ви програли (you failed if you&apos;re from England)
      </span>
      <Link className='px-24 py-2 text-lg uppercase font-bold bg-blue-500 text-white rounded-md hover:bg-blue-700' href={ROUTES.inProgress}>
        Почати спочатку
      </Link>
    </div>
  ) 
};

export default FailPage;
