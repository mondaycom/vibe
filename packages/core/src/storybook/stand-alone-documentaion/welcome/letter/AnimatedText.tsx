import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

const AnimatedChar = ({
  char,
  index,
  totalChars,
  scrollYProgress
}: {
  char: string;
  index: number;
  totalChars: number;
  scrollYProgress: MotionValue<number>;
}) => {
  const startProgress = index / totalChars;
  const endProgress = (index + 1) / totalChars;

  const opacity = useTransform(scrollYProgress, [startProgress, endProgress], [0.4, 1]);
  const textColor = useTransform(
    scrollYProgress,
    [startProgress, endProgress],
    ["var(--sb-layout-border-color)", "inherit"]
  );

  return (
    <motion.span
      style={{
        opacity,
        color: textColor,
        display: "inline-block"
      }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

export default function AnimatedText({
  text,
  className,
  scrollYProgress
}: {
  text: string;
  className?: string;
  scrollYProgress: MotionValue<number>;
}) {
  const words = text.split(" ");
  const totalChars = text.length;
  let charIndex = 0;

  return (
    <div className={className}>
      {words.map((word, i) => {
        const wordWithSpace = i < words.length - 1 ? word + " " : word;
        const wordElement = (
          <span key={i} style={{ display: "inline-block" }}>
            {wordWithSpace.split("").map((char, j) => (
              <AnimatedChar
                key={`${i}-${j}`}
                char={char}
                index={charIndex + j}
                totalChars={totalChars}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </span>
        );
        charIndex += wordWithSpace.length;
        return wordElement;
      })}
    </div>
  );
}
