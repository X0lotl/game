'use client';

import { FC, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

interface Props {
  src: string;
  onEnded?: () => void;
  loop?: boolean;
}

const Player: FC<Props> = (props) => {
  const { src, onEnded, loop } = props;

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return null;
  }

  return (
    <ReactPlayer
      onEnded={onEnded}
      url={src}
      controls
      loop={loop}
    />
  )
};

export default Player;
