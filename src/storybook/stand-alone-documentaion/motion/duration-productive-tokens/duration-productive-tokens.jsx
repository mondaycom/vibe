import { Flex } from "../../../../components/";
import { TokenInformationBox } from "../token-Information-box/token-information-box";
import { DurationProductiveShort, DurationProductiveMedium, DurationProductiveLong} from "../assets";
import styles from "./duaration-productive-tokens.module.scss";

const DURATION_PRODUCIVE = [
  {
    imgSrc: DurationProductiveShort,
    title: "Small motion - 70ms",
    description: "Use when components has a small amounts of change, Micro-Interactions and fades.",
    tokenDescription: "Token: motion-productive-small"
  },
  {
    imgSrc: DurationProductiveMedium,
    title: "Medium motion - 100ms",
    description: "Use when components has a medium amounts of change, Small expansions and notifications.",
    tokenDescription: "Token: motion-productive-medium"
  },
  {
    imgSrc: DurationProductiveLong,
    title: "Large motion - 150ms",
    description: "Use when components has a large amounts of change, expansions, distance movment.",
    tokenDescription: "Token: motion-productive-long"
  }
];



export const DurationProductiveTokens = () => {
  return (

    <div>
      <div className={styles.durationTokensGrid}>
        {DURATION_PRODUCIVE.map(({ imgSrc, alt, title, description, tokenDescription }) => (
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
    </div>
  );
};
