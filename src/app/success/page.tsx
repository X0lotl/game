"use client";

import { ROUTES } from "@/constants/routes";
import Link from "@/frontend/ui/Link/Link";
import { useEffect, useState } from "react";

const isServer = typeof window === "undefined";

const SuccessPage = () => {
  const [audio] = useState(!isServer ? new Audio('/media/audio/success-bg-sound.mp3') : undefined)

  useEffect(() => {
    if (!audio) return;

    audio.loop = false;
    audio.play()
  }, [])

  return (
    <div className='flex flex-col items-center gap-6'>
      <span className='text-4xl font-bold text-green-600'>
        Ви виграли (you won if you&apos;re from England)
      </span>
      <span className="whitespace-pre text-center">
        Хоміченко Данило - актор, сценарист, режисер-відомонтажу, розробник  {'\n'}
        Тарасенко Артем - акторка, сценарист, розробник {'\n'}
        Фетісов Ярослав - відеомонтажер {'\n'}
        Бачинська Катерина - операторка, сценаристка, бабуся, режисер-постановник {'\n'}
        Пелович Дмитро - розробник, сценарист {'\n'}
        Відейко Андрій - відеомонтажер {'\n'}
      </span>
      {
      (audio) &&(<button
        className="px-24 py-2 mt-3 text-lg uppercase font-bold bg-blue-500 text-white rounded-md hover:bg-blue-700"
        onClick={() => { audio.pause(); location.replace(ROUTES.inProgress)}}
      >
        Грати ще раз
      </button>)}
    </div>
  );
};

export default SuccessPage;
