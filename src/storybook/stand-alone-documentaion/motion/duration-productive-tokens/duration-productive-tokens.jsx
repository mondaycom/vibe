import { TokenInformationBox } from "../token-Information-box/token-information-box";
import { DurationProductiveShort, DurationProductiveMedium, DurationProductiveLong } from "../assets";
import styles from "./duaration-productive-tokens.module.scss";

const DURATION_PRODUCIVE = [
  {
    videoSrc: DurationProductiveShort,
    title: "Small motion - 70ms",
    description: "Use when components require minor changes, micro-Interactions, and fades.",
    tokenDescription: "--motion-productive-small"
  },
  {
    videoSrc: DurationProductiveMedium,
    title: "Medium motion - 100ms",
    description: "Use when components require medium changes, small expansions, and notifications.",
    tokenDescription: "--motion-productive-medium"
  },
  {
    videoSrc: DurationProductiveLong,
    title: "Large motion - 150ms",
    description: "Use when components require major changes, expansions, and distance movement.",
    tokenDescription: "--motion-productive-long"
  }
];

export const DurationProductiveTokens = () => {
  return (
    <div>
      <div className={styles.durationTokensGrid}>
        {DURATION_PRODUCIVE.map(({ videoSrc, title, description, tokenDescription }) => (
          <TokenInformationBox
            key={title}
            videoSrc={videoSrc}
            title={title}
            description={description}
            tokenDescription={tokenDescription}
          />
        ))}
      </div>
    </div>
  );
};
