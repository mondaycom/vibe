import { FC, useEffect, useState } from 'react';
import Link from '../link/link';
import { hrefTo } from '@storybook/addon-links';
import { LinkSize } from '../link/LinkConstants';
import { withStaticProps } from '../../types';

interface StorybookLinkProps {
  page: string;
  children: string;
  story?: string;
  size?: LinkSize;
}

const StorybookLink: FC<StorybookLinkProps> & { sizes?: typeof LinkSize } = ({ page, story = '', children, size }) => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    fetchLink();
    async function fetchLink() {
      const href = await hrefTo(page, story);
      setUrl(href);
    }
  }, [page, story]);

  return (
    <Link href={url} target={Link.targets.TOP} withoutSpacing size={size}>
      {children}
    </Link>
  );
};

export default withStaticProps(StorybookLink, { sizes: LinkSize });
