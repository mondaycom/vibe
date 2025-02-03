/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface WorkflowProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Workflow: React.FC<WorkflowProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path fill="currentColor" d="M17.98 12.287h-1.97v-4.78c0-.67-.55-1.22-1.22-1.22h-.84l-3.51-3.51a.525.525 0 0 0-.75 0l-3.51 3.51h-.95c-.67 0-1.22.55-1.22 1.22v4.78H2.04c-.29 0-.53.24-.53.53v4.25c0 .29.24.53.53.53h5.31c.29 0 .53-.24.53-.53v-4.25c0-.29-.24-.53-.53-.53H5.38v-4.62h.9c.08 0 .16-.01.24-.04l3.17 3.17c.21.21.54.21.75 0l3.14-3.14s.09.02.14.02h.9v4.62h-1.97c-.29 0-.53.24-.53.53v4.25c0 .29.24.53.53.53h5.31c.29 0 .53-.24.53-.53v-4.25c0-.29-.24-.53-.53-.53l.02-.01ZM6.5 13.667v2.55H2.89v-2.55H6.5Zm3.57-4.46-2.43-2.43 2.43-2.43 2.43 2.43-2.43 2.43Zm7.06 7.01h-3.61v-2.55h3.61v2.55Z"
      fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Workflow.displayName = 'Workflow';
export default Workflow;
/* tslint:enable */
/* eslint-enable */
