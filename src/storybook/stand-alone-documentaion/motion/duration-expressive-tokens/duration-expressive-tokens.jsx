import { TokenInformationBox } from "../token-Information-box/token-information-box";
import { DurationExpressiveShort, DurationExpressiveLong } from "../assets";
import styles from "./duaration-expressive-tokens.module.scss";

const DURATION_EXPRESSIVE = [
  {
    videoSrc: DurationExpressiveShort,
    title: "Small motion - 250ms",
    description: "System aletrs, notifications, atention and midiation.",
    tokenDescription: "--motion-expressive-short"
  },
  {
    videoSrc: DurationExpressiveLong,
    title: "Large motion - 400ms",
    description: "System aletrs, notifications, atention and midiation that enter screen with movment.",
    tokenDescription: "--motion-expressive-long"
  }
];

export const DurationExpressiveTokens = () => {
  return (
    <div className={styles.durationTokensGrid}>
      {DURATION_EXPRESSIVE.map(({ videoSrc, title, description, tokenDescription }) => (
        <TokenInformationBox
          key={title}
          videoSrc={videoSrc}
          title={title}
          description={description}
          tokenDescription={tokenDescription}
        />
      ))}
    </div>
  );
};
