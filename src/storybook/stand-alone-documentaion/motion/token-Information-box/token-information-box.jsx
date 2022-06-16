import { InformationBox } from "../../../components/information-box/information-box";

export const TokenInformationBox = ({ imgSrc, alt, title, description, tokenDescription }) => {
  const TokenInformationBoxImg = <img src={imgSrc} alt={alt} />;

  return (
    <div>
      <InformationBox title={title} description={description} />
      <p>{tokenDescription}</p>
    </div>
  );
};
