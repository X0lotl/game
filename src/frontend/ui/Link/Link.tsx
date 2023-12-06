import { FC, PropsWithChildren } from 'react';
import NextLink from 'next/link';

interface CustomProps {
  href: string;
  className?: string;
  onClick?: () => void;
}

type Props = PropsWithChildren<CustomProps>;

const Link: FC<Props> = (props) => {
  const { href, children } = props;

  return (
    <div onClick={props.onClick} className={props.className}>
      <NextLink href={href}>
        {children}
      </NextLink>
    </div>
  )
};

export default Link;
