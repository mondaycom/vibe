/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface FavoriteProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Favorite: React.FC<FavoriteProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M11.234 3.016a1.379 1.379 0 0 0-2.47 0l-1.78 3.61-3.99.584h-.003a1.376 1.376 0 0 0-.754 2.348v.001l2.878 2.813-.68 3.97v.001a1.376 1.376 0 0 0 2.005 1.45L10 15.921l3.549 1.866a1.377 1.377 0 0 0 2.005-1.45v-.001l-.68-3.97 2.882-2.81v-.001a1.377 1.377 0 0 0-.753-2.348l-3.989-.58-1.78-3.61Zm-1.235.888L8.3 7.35a1.378 1.378 0 0 1-1.034.752l-3.803.557 2.747 2.685a1.376 1.376 0 0 1 .395 1.22l-.649 3.79 3.404-1.79a1.377 1.377 0 0 1 1.28 0l3.395 1.785-.65-3.79v-.002a1.374 1.374 0 0 1 .396-1.218l2.751-2.683-3.796-.554a1.382 1.382 0 0 1-1.037-.752L10 3.904Z"
      fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Favorite.displayName = 'Favorite';
export default Favorite;
/* tslint:enable */
/* eslint-enable */
