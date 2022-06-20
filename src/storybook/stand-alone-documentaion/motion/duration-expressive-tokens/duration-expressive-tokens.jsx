import { Flex } from "../../../../components/";
import { TokenInformationBox } from "../token-Information-box/token-information-box";
import { DurationProductiveShort, DurationProductiveMedium } from "../assets";
import styles from "./duaration-expressive-tokens.module.scss";

const DURATION_EXPRESSIVE = [
  {
    imgSrc: DurationProductiveShort,
    title: "Small motion - 250ms",
    description: "System aletrs, notifications, atention and midiation.",
    tokenDescription: "Token: motion-expressive-short"
  },
  {
    imgSrc: DurationProductiveMedium,
    title: "Large motion - 400ms",
    description: "System aletrs, notifications, atention and midiation that enter screen with movment.",
    tokenDescription: "Token: motion-expressive-long"
  }
];

export const DurationExpressiveTokens = () => {
  return (
    <div className={styles.durationTokensGrid}>
      {DURATION_EXPRESSIVE.map(({ imgSrc, alt, title, description, tokenDescription }) => (
        <TokenInformationBox
          key={title}
          alt={alt}
          imgSrc={imgSrc}
          title={title}
          description={description}
          tokenDescription={tokenDescription}
        />
      ))}
    </div>
  );
};
