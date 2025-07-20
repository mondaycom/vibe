import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import styles from "./FloatingObjects.module.scss";
import HeroAbstractFluidShape from "./icons/HeroAbstractFluidShape";
import HeroHeartShape from "./icons/HeroHeartShape";
import HeroCloverShape from "./icons/HeroCloverShape";
import HeroCircleShape from "./icons/HeroCircleShape";
import HeroCloverShapeGreen from "./icons/HeroCloverShapeGreen";
import HeroArrowCrossShape from "./icons/HeroArrowCrossShape";
import HeroCircleShapeTeal from "./icons/HeroCircleShapeTeal";
import cx from "classnames";

function mapRange(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number) {
  if (fromLow === fromHigh) {
    return toLow;
  }
  const percentage = (value - fromLow) / (fromHigh - fromLow);
  return toLow + percentage * (toHigh - toLow);
}

interface FloatingObjectProps {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  direction?: "toward" | "away";
  smoothing?: number;
  scrollSpeed?: number;
  rotation?: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

function FloatingObject({
  children,
  className,
  distance = 25,
  direction = "toward",
  smoothing = 50,
  scrollSpeed = 0,
  rotation = 0,
  top,
  bottom,
  left,
  right
}: FloatingObjectProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const transition = {
    damping: 100,
    stiffness: mapRange(smoothing, 0, 100, 2000, 50),
    mass: 1
  };

  const springX = useSpring(mouseX, transition);
  const springY = useSpring(mouseY, transition);

  const offset = distance * (direction === "toward" ? 1 : -1);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const mouseXPos = event.clientX;
      const mouseYPos = event.clientY;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Normalize mouse position relative to center
      const normalizedX = ((mouseXPos - centerX) / centerX) * offset;
      const normalizedY = ((mouseYPos - centerY) / centerY) * offset;

      mouseX.set(normalizedX);
      mouseY.set(normalizedY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [offset, mouseX, mouseY]);

  const { scrollY } = useScroll();
  const parallaxOffset = useTransform(scrollY, [0, 1000], [0, 1000 * scrollSpeed]);

  const finalY = useTransform([springY, parallaxOffset], ([mouse, scroll]) => (mouse as number) + (scroll as number));

  return (
    <motion.div
      className={cx(styles.object, className)}
      style={{
        x: smoothing === 0 ? mouseX : springX,
        y: finalY,
        rotate: rotation,
        top: top === undefined ? undefined : `${top}%`,
        bottom: bottom === undefined ? undefined : `${bottom}%`,
        left: left === undefined ? undefined : `${left}%`,
        right: right === undefined ? undefined : `${right}%`
      }}
    >
      {children}
    </motion.div>
  );
}

export default function FloatingObjects() {
  return (
    <div className={styles.floatingObjectsWrapper}>
      <div className={styles.floatingObjects}>
        <FloatingObject top={3} left={35} distance={35} direction="toward" smoothing={50} scrollSpeed={-0.6}>
          <HeroCircleShapeTeal />
        </FloatingObject>

        <FloatingObject
          top={-10}
          right={25}
          distance={20}
          direction="toward"
          smoothing={10}
          scrollSpeed={-0.4}
          rotation={-30}
        >
          <HeroHeartShape />
        </FloatingObject>

        <FloatingObject bottom={5} right={42} distance={50} direction="toward" smoothing={40} scrollSpeed={-0.8}>
          <HeroCloverShape />
        </FloatingObject>

        <FloatingObject bottom={20} left={20} distance={20} direction="toward" smoothing={50} scrollSpeed={-0.6}>
          <HeroCircleShape />
        </FloatingObject>

        <FloatingObject
          top={12}
          left={0}
          distance={20}
          direction="toward"
          smoothing={60}
          scrollSpeed={-0.5}
          rotation={60}
        >
          <HeroCloverShapeGreen />
        </FloatingObject>

        <FloatingObject
          bottom={5}
          right={5}
          distance={25}
          direction="toward"
          smoothing={30}
          scrollSpeed={-0.45}
          rotation={-45}
        >
          <HeroArrowCrossShape />
        </FloatingObject>

        <FloatingObject
          top={40}
          right={-5}
          distance={30}
          direction="toward"
          smoothing={25}
          scrollSpeed={-0.6}
          rotation={30}
        >
          <HeroAbstractFluidShape />
        </FloatingObject>

        <FloatingObject
          bottom={0}
          left={0}
          distance={18}
          direction="toward"
          smoothing={35}
          scrollSpeed={-0.4}
          rotation={30}
        >
          <HeroHeartShape />
        </FloatingObject>

        <FloatingObject
          top={-8}
          right={0}
          distance={20}
          direction="toward"
          smoothing={30}
          scrollSpeed={-0.5}
          rotation={20}
        >
          <HeroCloverShapeGreen />
        </FloatingObject>

        <FloatingObject
          top={-10}
          left={8}
          distance={25}
          direction="toward"
          smoothing={10}
          scrollSpeed={-0.45}
          rotation={-15}
        >
          <HeroArrowCrossShape />
        </FloatingObject>
      </div>
    </div>
  );
}
