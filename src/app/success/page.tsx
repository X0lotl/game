"use client";

import { ROUTES } from "@/constants/routes";
import Link from "@/frontend/ui/Link/Link";
import { useEffect, useState } from "react";

const SuccessPage = () => {
  const [audio] = useState(new Audio('/media/audio/success-bg-sound.mp3'))

  useEffect(() => {
    audio.loop = false;
    audio.play()
  }, [])

  return (
    <div className='flex flex-col items-center gap-6'>
      <span className='text-4xl font-bold text-green-600'>
        Ви виграли (you won if you&apos;re from England)
      </span>
      <span className="whitespace-pre text-center">
        Хоміченко Данило - актор, сценарист,  {'\n'}
        Тарасенко Артем - акторка, сценарист {'\n'}
        Фетісов Ярослав - відеомонтажер {'\n'}
        Бачинська Катерина - операторка сценаристка, бабуся {'\n'}
        Пелович Дмитро - розробник {'\n'}
        Відейко Андрій - відеомонтажер {'\n'}
      </span>

      <Link
        className="px-24 py-2 mt-3 text-lg uppercase font-bold bg-blue-500 text-white rounded-md hover:bg-blue-700"
        href={ROUTES.inProgress}
        onClick={() => audio.pause()}
      >
        Грати ще раз
      </Link>
    </div>
  );
};

export default SuccessPage;
