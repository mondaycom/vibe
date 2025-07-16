import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./LetterHeart.module.scss";

interface HeartAnimationProps {
  isActive: boolean;
}

export default function LetterHeart({ isActive }: HeartAnimationProps) {
  const [isFilled, setIsFilled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isScrollAnimation, setIsScrollAnimation] = useState(false);

  const dots = [
    { color: "#6E6EFF", angle: 26.36 },
    { color: "#FF5A85", angle: 65.73 },
    { color: "#FFC300", angle: 294.2 },
    { color: "#00B267", angle: 153.6 },
    { color: "#FFC300", angle: 206.36 },
    { color: "#00B267", angle: 245.73 },
    { color: "#6E6EFF", angle: 333.6 },
    { color: "#FF5A85", angle: 114.2 }
  ];

  const startAnimation = () => {
    setIsAnimating(true);
    setIsFilled(true);
  };

  const resetAnimation = () => {
    setIsFilled(false);
    setIsAnimating(false);
  };

  const handleHeartClick = () => {
    setIsScrollAnimation(false);
    if (isFilled) {
      resetAnimation();
    } else {
      startAnimation();
    }
  };

  // Trigger animation when text animation completes
  useEffect(() => {
    if (isActive) {
      setIsScrollAnimation(true);
      startAnimation();
    } else {
      resetAnimation();
    }
  }, [isActive]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleHeartClick();
    }
  };

  const handleAnimationComplete = () => {
    if (isAnimating) {
      setIsAnimating(false);
      if (isScrollAnimation) {
        setIsFilled(false);
        setIsScrollAnimation(false);
      }
    }
  };

  return (
    <motion.div className={styles.letterHeart} onClick={handleHeartClick} onKeyDown={handleKeyDown}>
      <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M31.165 47.3156C30.4653 47.7854 29.5347 47.7854 28.835 47.3156C28.799 47.2913 28.769 47.2704 28.747 47.2536C28.3008 46.9154 27.6653 46.4238 26.9035 45.8073C25.3813 44.5755 23.348 42.8393 21.3112 40.8266C19.2781 38.8176 17.2196 36.5115 15.6634 34.1383C14.1193 31.7836 13 29.2584 13 26.8333C13 21.7605 17.1584 17.668 22.2633 17.668C25.4943 17.668 28.3421 19.305 30 21.7909C31.6579 19.305 34.5057 17.668 37.7367 17.668C42.8416 17.668 47 21.7605 47 26.8333C47 29.2584 45.8807 31.7836 44.3366 34.1383C42.7804 36.5115 40.7219 38.8176 38.6888 40.8266C36.652 42.8393 34.6187 44.5755 33.0965 45.8073C32.3347 46.4238 31.6992 46.9154 31.253 47.2536C31.231 47.2704 31.201 47.2913 31.165 47.3156Z"
          stroke="#121212"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ fill: "transparent", strokeWidth: 3 }}
          animate={{
            fill: isFilled ? "#FF5A85" : "transparent",
            scale: isFilled ? 1.05 : 1,
            strokeWidth: isFilled ? 0 : 3
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            strokeWidth: { duration: 0 }
          }}
          style={{ transformOrigin: "center" }}
        />
        <circle
          cx="30"
          cy="30.917"
          r="29"
          stroke="#121212"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      {isAnimating &&
        dots.map((dot, index) => (
          <motion.div
            key={index}
            className={styles.dot}
            style={{
              backgroundColor: dot.color
            }}
            initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              x: [0, Math.cos((dot.angle * Math.PI) / 180) * 50],
              y: [0, Math.sin((dot.angle * Math.PI) / 180) * 50]
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onAnimationComplete={handleAnimationComplete}
          />
        ))}
    </motion.div>
  );
}
