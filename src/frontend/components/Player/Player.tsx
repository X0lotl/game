'use client';

import { FC, useEffect, useRef, useState } from 'react';
import PlayIcon from './PlayIcon';
import PlayerSkipIcon from './PlayerSkipIcon';

interface Props {
  src: string;
  onEnded?: () => void;
  loop?: boolean;
}

const Player: FC<Props> = (props) => {
  const { src, onEnded, loop } = props;

  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false)

  const videoElement = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      videoElement.current?.load()
      videoElement.current?.play()
    }, 0)
  }, [src])

  if (!isLoaded) {
    return null;
  }

  const onPlayButtonClick = () => {
    setIsPlaying(true)
    videoElement.current?.play()
  }

  const onSkipButtonClick = () => {
    if(onEnded)
      onEnded()
  }

  return (
    <div className='relative overflow-hidden rounded-xl w-[75vw]'>
      {
        !isPlaying && (
          <div onClick={onPlayButtonClick} className='absolute top-0 left-0 w-full h-full z-10 bg-black/50 grid place-items-center cursor-pointer'>
            <PlayIcon/>
          </div>
        )
      }
      {
        (isPlaying && !loop) && (
          <button 
            className='absolute right-[15px] top-[15px] z-10 px-10 py-2 text-lg uppercase font-bold bg-blue-500 text-white rounded-md hover:bg-blue-700' 
            onClick={onSkipButtonClick}
          >
            <PlayerSkipIcon/>
          </button>
        )
      }
      <video
        className='w-full'
        onEnded={onEnded}
        loop={loop}
        ref={videoElement}
      >
        <source src={src}/>
      </video>
    </div>
  )
};

export default Player;
