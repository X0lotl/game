'use client';

import { FC, PropsWithChildren } from 'react';
import { GameProvider } from '@/frontend/provider/GameProvider';

import '../style/globals.css';

const RootLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <html lang='en'>
      <body>
        <GameProvider>
          <div className='w-full h-screen grid place-items-center'>
            <div className='flex flex-col items-center'>
              {children}
            </div>
          </div>
        </GameProvider>
      </body>
    </html>
  );
};

export default RootLayout;
