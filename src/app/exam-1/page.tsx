'use client'

import { FC } from "react";

const FailPage: FC = () => {
  const onFail = () => {
    location.replace('/in-progress?id=32&interacted=true');
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <span className="text-4xl font-bold text-black">
        Що виведе ця програма java script console.log([2]+2) ?
      </span>
      <div className="grid grid-cols-2 gap-4">
        <button
          className="px-24 py-2 text-lg uppercase font-bold bg-blue-500 text-white rounded-md hover:bg-blue-700"
          onClick={onFail}
        >
          4
        </button>
        <button
          className="px-24 py-2 text-lg uppercase font-bold bg-blue-500 text-white rounded-md hover:bg-blue-700"
          onClick={() => location.replace('/exam-2')}
        >
          &apos;22&apos;
        </button>
        <button
          className="px-24 py-2 text-lg uppercase font-bold bg-blue-500 text-white rounded-md hover:bg-blue-700"
          onClick={onFail}
        >
          [2,2]
        </button>
        <button
          className="px-24 py-2 text-lg uppercase font-bold bg-blue-500 text-white rounded-md hover:bg-blue-700"
          onClick={onFail}
        >
          [2,2]
        </button>
      </div>
    </div>
  );
};

export default FailPage;
