import React, { EventHandler, FC, SyntheticEvent } from 'react';

interface Props {
  title: string;
  onClick: EventHandler<SyntheticEvent<HTMLButtonElement>>;
}

const Button: FC<Props> = (props) => {
  const {
    title,
    onClick
  } = props;

  return (
    <button
      className='px-24 py-2 text-lg uppercase font-bold bg-blue-500 text-white rounded-md hover:bg-blue-700'
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
