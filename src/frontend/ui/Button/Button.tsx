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
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
