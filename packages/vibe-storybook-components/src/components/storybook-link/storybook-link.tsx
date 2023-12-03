import { FC, useEffect, useState } from 'react';
import Link from '../link/link';
import { hrefTo } from '@storybook/addon-links';

interface StorybookLinkProps {
  page: string;
  children: string;
  story?: string;
}

const StorybookLink: FC<StorybookLinkProps> = ({ page, story = '', children }) => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    fetchLink();
    async function fetchLink() {
      const href = await hrefTo(page, story);
      setUrl(href);
    }
  }, []);

  return (
    <Link href={url} target={Link.targets.TOP} withoutSpacing>
      {children}
    </Link>
  );
};

export default StorybookLink;
