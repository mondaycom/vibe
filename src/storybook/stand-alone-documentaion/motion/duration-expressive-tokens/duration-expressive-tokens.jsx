import { TokenInformationBox } from "../token-Information-box/token-information-box";
import { DurationExpressiveShort, DurationExpressiveLong } from "../assets";
import styles from "./duaration-expressive-tokens.module.scss";

const DURATION_EXPRESSIVE = [
  {
    videoSrc: DurationExpressiveShort,
    title: "Small motion - 250ms",
    description: "System alerts, notifications, attentions, and mediation.",
    tokenDescription: "--motion-expressive-short"
  },
  {
    videoSrc: DurationExpressiveLong,
    title: "Large motion - 400ms",
    description: "System alerts, notifications, attentions, and mediations that enter the screen with movement.",
    tokenDescription: "--motion-expressive-long"
  },
  {}
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
