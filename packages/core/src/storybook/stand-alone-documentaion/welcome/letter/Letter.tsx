import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";
import styles from "./Letter.module.scss";
import Flex from "../../../../components/Flex/Flex";
import LetterHeart from "./LetterHeart";
import EntranceAnimation from "../EntranceAnimation";
import AnimatedText from "./AnimatedText";

export default function Letter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [textAnimationComplete, setTextAnimationComplete] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"]
  });

  const fasterScrollYProgress = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  useEffect(() => {
    const unsubscribe = fasterScrollYProgress.onChange(value => {
      setTextAnimationComplete(value >= 1);
    });
    return () => unsubscribe();
  }, [fasterScrollYProgress]);

  return (
    <EntranceAnimation>
      <Flex justify="center">
        <Flex className={styles.letter} direction="column" align="start" ref={containerRef}>
          <Flex className={styles.introContainer} justify="space-between" align="center">
            <div className={styles.intro}>To our dearest contributors,</div>
            <LetterHeart isActive={textAnimationComplete} />
          </Flex>

          <AnimatedText
            text="We want to thank everyone who contributes daily to monday.com Design Foundations. As an open-source design platform, Vibe's greatest asset is the dialogue we share with our users—who are really the builders of our design platform."
            className={styles.content}
            scrollYProgress={fasterScrollYProgress}
          />
          <div className={styles.thankYou}>Thank you!</div>
        </Flex>
      </Flex>
    </EntranceAnimation>
  );
}
