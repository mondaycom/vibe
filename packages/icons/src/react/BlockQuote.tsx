/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface BlockQuoteProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const BlockQuote: React.FC<BlockQuoteProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <g stroke="currentColor" strokeWidth="1.143" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.21943 10.0149C2.79433 9.32279 2.56929 8.52648 2.56929 7.71428 2.56929 6.90209 2.79433 6.10577 3.21943 5.41371M6.65944 10.0149C6.23433 9.32279 6.00929 8.52648 6.00929 7.71428 6.00929 6.90209 6.23433 6.10577 6.65944 5.41371M16.7806 14.5863C17.2057 13.8942 17.4307 13.0979 17.4307 12.2857 17.4307 11.4735 17.2057 10.6772 16.7806 9.98515M13.3406 14.5863C13.7657 13.8942 13.9907 13.0979 13.9907 12.2857 13.9907 11.4735 13.7657 10.6772 13.3406 9.98515"
      />
    </g>
  </svg>
);
BlockQuote.displayName = 'BlockQuote';
export default BlockQuote;
/* tslint:enable */
/* eslint-enable */
