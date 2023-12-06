import { FC, PropsWithChildren } from 'react';
import NextLink from 'next/link';

interface CustomProps {
  href: string;
}

type Props = PropsWithChildren<CustomProps>;

const Link: FC<Props> = (props) => {
  const { href, children } = props;

  return (
    <div>
      <NextLink href={href}>
        {children}
      </NextLink>
    </div>
  )
};

export default Link;
