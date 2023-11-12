import type { Metadata } from 'next';
import { FC, PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Game',
};

const RootLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;


  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
