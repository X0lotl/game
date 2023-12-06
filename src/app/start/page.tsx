'use client';

import { FC } from 'react';
import { ROUTES } from '@/constants/routes';
import Link from '@/frontend/ui/Link/Link';

const StartPage: FC = () => {
  return (
    <div>
      <span>
        Title
      </span>

      <span>
        Description
      </span>

      <Link href={ROUTES.inProgress}>
        Start
      </Link>
    </div>
  )
};

export default StartPage;
