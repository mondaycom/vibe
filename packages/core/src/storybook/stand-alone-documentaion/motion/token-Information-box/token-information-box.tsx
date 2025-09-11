import React from "react";
import { InformationBox } from "vibe-storybook-components";

interface TokenInformationBoxProps {
  className?: string;
  videoSrc?: string;
  title?: string;
  description?: string;
  tokenInfo?: string;
  tokenDescription?: string;
}

export const TokenInformationBox: React.FC<TokenInformationBoxProps> = ({
  className,
  videoSrc,
  title,
  description,
  tokenInfo,
  tokenDescription
}) => {
  const TokenInformationBoxImg = videoSrc ? <video src={videoSrc} controls loop /> : null;

  return (
    <div className={className}>
      <InformationBox component={TokenInformationBoxImg} title={title} description={description} />
      {tokenInfo && <p>{tokenInfo}</p>}
      {tokenDescription && <p>Token: {tokenDescription}</p>}
    </div>
  );
};
