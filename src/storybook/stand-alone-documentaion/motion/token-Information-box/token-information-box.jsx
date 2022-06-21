import { InformationBox } from "../../../components/information-box/information-box";

export const TokenInformationBox = ({ className, videoSrc, title, description, tokenInfo, tokenDescription }) => {
  const TokenInformationBoxImg = videoSrc ? <video src={videoSrc} controls loop /> : null;

  return (
    <div className={className}>
      <InformationBox component={TokenInformationBoxImg} title={title} description={description} />
      <p>{tokenInfo}</p>
      <p>{tokenDescription}</p>
    </div>
  );
};
