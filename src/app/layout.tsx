'use client';

import { FC, PropsWithChildren } from 'react';
import { GameProvider } from '@/frontend/provider/GameProvider';

const RootLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <html lang='en'>
      <body>
        <GameProvider>
          {children}
        </GameProvider>
      </body>
    </html>
  );
};

export default RootLayout;
