'use client'

import Link from "next/link";
import { FC } from "react";
import { ROUTES } from "@/constants/routes";

const FailPage: FC = () => {
const onFail = () => {
  location.replace('/in-progress?id=32&interacted=true');
}

  return (
    <div className="flex flex-col items-center gap-6">
      <span className="text-4xl font-bold text-black">
      Розмістіть Глибовців у порядку спадання
      </span>
      <div className="grid grid-cols-2 gap-4">
        <Link
          className="px-24 py-2 text-lg uppercase font-bold bg-blue-500 text-white rounded-md hover:bg-blue-700"
          href={ROUTES.exam3}
        >
          ММ АМ
        </Link>
        <button
          className="px-24 py-2 text-lg uppercase font-bold bg-blue-500 text-white rounded-md hover:bg-blue-700"
          onClick={onFail}
        >
          АМ ММ
        </button>
        <button
          className="px-24 py-2 text-lg uppercase font-bold bg-blue-500 text-white rounded-md hover:bg-blue-700"
          onClick={onFail}
        >
          ММА М
        </button>
        <button
          className="px-24 py-2 text-lg uppercase font-bold bg-blue-500 text-white rounded-md hover:bg-blue-700"
          onClick={onFail}
        >
          МАМА
        </button>
      </div>
    </div>
  );
};

export default FailPage;
