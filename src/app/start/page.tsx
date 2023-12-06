'use client';

import { FC, useState } from 'react';
import { ROUTES } from '@/constants/routes';
import Link from '@/frontend/ui/Link/Link';

const StartPage: FC = () => {
  const [backgroundMusicEnabled, setBackgroudMusicEnabled] = useState(false)

  const [audio] = useState(new Audio('/media/audio/start-bg-sound.mp3'))

  const handleEnableBackgroundMusicButtonClick = () => {
    setBackgroudMusicEnabled(true)
    audio.volume = 0.2
    audio.play()
  }

  const onStartButtonClick = () => {
    audio.pause()
  }

  return (
    <div className='flex flex-col items-center gap-4'>
      {
        !backgroundMusicEnabled && <button
          className='fixed top-10 right-10 px-10 py-2 text-md font-medium bg-blue-500 text-white rounded-md hover:bg-blue-700' 
          onClick={handleEnableBackgroundMusicButtonClick}
        >
          Увімкнути фонову музику
        </button>
      }

      <span className='text-4xl'>
        День з життя могилянця
      </span>
      <p className='whitespace-pre text-center'>
        {'\n'}
        Мета гри - успішно скласти екзамен та не померти під час цих спроб. {'\n'}
        {'\n'}
        Складності {'\n'}
        {'\n'}
        Гра має дві складності: {'\n'}
        {'\n'}
        Гроші: Чим менше грошей у студента, тим важче йому буде купити необхідні матеріали. {'\n'}
        Здоров&apos;я: Чим менше здоров&apos;я у студента, тим важче йому буде впоратися з навантаженням. {'\n'}
        {'\n'}
        Для успішного проходження гри рекомендується: {'\n'}
        {'\n'}
        Економити гроші, різноманітними методами. {'\n'}
        Морально готуватись до екзамену. {'\n'} 
        {'\n'}
        Бажаю удачі!
      </p>

      <Link 
        className='px-24 py-2 text-lg uppercase font-bold bg-blue-500 text-white rounded-md hover:bg-blue-700' 
        href='/in-progress?interacted=true'
        onClick={onStartButtonClick}
      >
        Почати
      </Link>
    </div>
  )
};

export default StartPage;
