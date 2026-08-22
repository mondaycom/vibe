import styles from "./GlassAgentTile.module.scss";

export type GlassAgentTileVariant = 1 | 2 | 3 | 4;

import agent1 from "../assets/agents/glass/agent1.png";
import agent2 from "../assets/agents/glass/agent2.png";
import agent3 from "../assets/agents/glass/agent3.png";
import agent4 from "../assets/agents/glass/agent4.png";

interface VariantSpec {
  src: string;
  bg: string;
  imageStyle: React.CSSProperties;
}

const VARIANTS: Record<GlassAgentTileVariant, VariantSpec> = {
  1: {
    src: agent1,
    bg: "rgba(148, 80, 253, 0.4)",
    imageStyle: {
      left: "-2.09%",
      top: "-3.71%",
      width: "100.24%",
      height: "184.27%",
    },
  },
  2: {
    src: agent2,
    bg: "rgba(157, 255, 0, 0.4)",
    imageStyle: {
      left: "-8.19%",
      top: "-5.4%",
      width: "113.12%",
      height: "205.08%",
    },
  },
  3: {
    src: agent3,
    bg: "rgba(147, 190, 255, 0.4)",
    imageStyle: {
      left: "-5.77%",
      top: "-1.53%",
      width: "112.16%",
      height: "202.71%",
    },
  },
  4: {
    src: agent4,
    bg: "rgba(255, 255, 255, 0.4)",
    imageStyle: {
      left: "-6.57%",
      top: "5.43%",
      width: "105.79%",
      height: "151.5%",
    },
  },
};

interface GlassAgentTileProps {
  variant: GlassAgentTileVariant;
  size?: number;
  ariaLabel?: string;
  className?: string;
}

export function GlassAgentTile({
  variant,
  size = 40,
  ariaLabel,
  className,
}: GlassAgentTileProps) {
  const spec = VARIANTS[variant];
  return (
    <span
      className={`${styles.wrapper}${className ? ` ${className}` : ""}`}
      style={
        {
          "--glass-tile-size": `${size}px`,
          "--glass-tile-bg": spec.bg,
        } as React.CSSProperties
      }
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
    >
      <span className={styles.tile}>
        <img
          className={styles.image}
          src={spec.src}
          alt=""
          style={spec.imageStyle}
        />
      </span>
    </span>
  );
}
