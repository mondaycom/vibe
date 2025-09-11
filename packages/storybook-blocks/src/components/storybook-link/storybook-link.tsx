import { FC, useEffect, useState, ReactNode } from 'react';
import Link from '../link/link';
import { hrefTo } from '@storybook/addon-links';
import { LinkSize } from '../link/LinkConstants';
import { withStaticProps } from '../../types';

interface StorybookLinkProps {
  page: string;
  children: ReactNode | ReactNode[] | string;
  story?: string;
  size?: LinkSize;
  className?: string;
}

const StorybookLink: FC<StorybookLinkProps> & { sizes?: typeof LinkSize } = ({
  page,
  story = '',
  children,
  size,
  className,
}) => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    fetchLink();
    async function fetchLink() {
      const href = await hrefTo(page, story);
      setUrl(href);
    }
  }, [page, story]);

  return (
    <Link href={url} target={Link.targets.TOP} withoutSpacing size={size} className={className}>
      {children}
    </Link>
  );
};

export default withStaticProps(StorybookLink, { sizes: LinkSize });
