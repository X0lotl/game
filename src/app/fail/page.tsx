"use client";
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { ROUTES } from '@/constants/routes';

const FailPage: FC = () => {
  const isServer = typeof window === "undefined";

  const [audio] = useState(!isServer ? new Audio('/media/audio/fail-bg-sound.mp3') : undefined)

  useEffect(() => {
    if (!audio) return;
    audio.loop = false;
    audio.play()
  }, [])

  return (
    <div className='flex flex-col items-center gap-6'>
      <span className='text-4xl font-bold text-red-600'>
        Ви програли (you failed if you&apos;re from England)
      </span>
      {(audio) && (<Link onClick={() => audio.pause()} className='px-24 py-2 text-lg uppercase font-bold bg-blue-500 text-white rounded-md hover:bg-blue-700' href={ROUTES.inProgress}>
        Почати спочатку
      </Link>)}
    </div>
  ) 
};

export default FailPage;
