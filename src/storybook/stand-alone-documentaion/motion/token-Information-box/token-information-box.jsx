import { InformationBox } from "../../../components/information-box/information-box";

export const TokenInformationBox = ({ imgSrc, alt, title, description, tokenDescription }) => {
  const TokenInformationBoxImg = imgSrc ? <img src={imgSrc} alt={alt} /> : null;

  return (
    <div>
      <InformationBox component={TokenInformationBoxImg} title={title} description={description} />
      <p>{tokenDescription}</p>
    </div>
  );
};
