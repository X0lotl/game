'use client'
import Link from "next/link";
import { FC } from "react";
import { ROUTES } from "@/constants/routes";

const FailPage: FC = () => {
  const onCorrect = () => {
    location.replace('/in-progress?id=25&interacted=true');
  };

  const onFail = () => {
    location.replace('/in-progress?id=32&interacted=true');
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <span className="text-4xl font-bold text-black">
        Як звати викладача?
      </span>
      <div className="grid grid-cols-2 gap-4">
        <button
          className="px-24 py-2 text-lg uppercase font-bold bg-blue-500 text-white rounded-md hover:bg-blue-700"
          onClick={onFail}
        >
          Людмила Петрівна
        </button>
        <button
          className="px-24 py-2 text-lg uppercase font-bold bg-blue-500 text-white rounded-md hover:bg-blue-700"
          onClick={onFail}
        >
          Юлія Темошенко
        </button>
        <button
          className="px-24 py-2 text-lg uppercase font-bold bg-blue-500 text-white rounded-md hover:bg-blue-700"
          onClick={onCorrect}
        >
          Артем Тарасенко
        </button>
        <button
          className="px-24 py-2 text-lg uppercase font-bold bg-blue-500 text-white rounded-md hover:bg-blue-700"
          onClick={onFail}
        >
          Тарас Артеменко
        </button>
      </div>
    </div>
  );
};

export default FailPage;
