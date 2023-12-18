import * as React from "react";

export interface ModalProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}

const Modal: React.FC<ModalProps> = ({ size = "20" }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Icon / Platform / Modal">
        <path
          id="Vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.5 6V11C16.5 11.2761 16.2761 11.5 16 11.5H7C6.72386 11.5 6.5 11.2761 6.5 11V6C6.5 5.72386 6.72386 5.5 7 5.5H16C16.2761 5.5 16.5 5.72386 16.5 6ZM16 4C17.1046 4 18 4.89543 18 6V11C18 12.1046 17.1046 13 16 13H7C5.89543 13 5 12.1046 5 11V6C5 4.89543 5.89543 4 7 4H16ZM3.75 13V6H2.25V13C2.25 14.5188 3.48122 15.75 5 15.75H14V14.25H5C4.30964 14.25 3.75 13.6904 3.75 13Z"
          fill="#676879"
        />
      </g>
    </svg>
  );
};

export default Modal;
