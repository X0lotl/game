import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

const SuccessPage = () => {
  return (
    <div className='flex flex-col items-center gap-6'>
      <span className='text-4xl font-bold text-green-600'>
        Ви виграли (you won if you&apos;re from England)
      </span>
      <Link className='px-24 py-2 text-lg uppercase font-bold bg-blue-500 text-white rounded-md hover:bg-blue-700' href={ROUTES.inProgress}>
        Start again
      </Link>
    </div>
  )
}

export default SuccessPage;