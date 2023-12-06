'use client';

import { FC, useEffect } from 'react';
import { redirect } from 'next/navigation';
import { ROUTES } from '@/constants/routes';

const HomePage: FC = () => {
  useEffect(() => {
    redirect(ROUTES.start);
  }, []);

  return null;
};

export default HomePage;
