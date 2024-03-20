import React from 'react';

type Required<T> = {
  [P in keyof T]-?: T[P];
};

export const withStaticProps = <T, S>(forwarded: React.FC<T> & Partial<S>, staticProps: Required<S>) =>
  Object.assign(forwarded, staticProps);
