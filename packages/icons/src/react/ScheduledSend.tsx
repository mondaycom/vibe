/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ScheduledSendProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const ScheduledSend: React.FC<ScheduledSendProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M13.54 9.682a4.052 4.052 0 1 1 0 8.104 4.052 4.052 0 0 1 0-8.104Zm1.874-7.331a2.016 2.016 0 0 1 2.071.454 1.914 1.914 0 0 1 .458 2.05l-1.244 3.649-.06.13a.731.731 0 0 1-.854.316.703.703 0 0 1-.455-.893l1.24-3.645-9.719 7.926-.061 2.355.952-.48a.73.73 0 0 1 .971.303.7.7 0 0 1-.308.95l-2.036 1.031a.737.737 0 0 1-.715-.03.704.704 0 0 1-.338-.616l.092-3.524-2.87-2.807a1.916 1.916 0 0 1-.492-.807 1.88 1.88 0 0 1-.044-.922c.063-.34.217-.658.447-.92s.528-.46.862-.571l.006-.001L15.414 2.35Zm-1.873 8.83a2.552 2.552 0 1 0 0 5.105 2.552 2.552 0 0 0 0-5.104Zm0 .533a.75.75 0 0 1 .75.75v.52h.671a.75.75 0 0 1 0 1.5h-1.421a.75.75 0 0 1-.75-.75v-1.27a.75.75 0 0 1 .75-.75ZM3.777 7.636v.002a.542.542 0 0 0-.338.337l-.019.068-.002.017a.5.5 0 0 0 .141.46l2.599 2.543 8.6-7.01L3.776 7.636Z"
    />
  </svg>
);
ScheduledSend.displayName = 'ScheduledSend';
export default ScheduledSend;
/* tslint:enable */
/* eslint-enable */
