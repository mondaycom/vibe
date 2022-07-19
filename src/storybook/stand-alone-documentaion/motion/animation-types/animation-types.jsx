import { AnimationInformationBox } from "../animation-information-box/animation-information-box";
import { TypeCss, TypeEmpty, TypeLike, TypeStatus } from "../assets";
import styles from "./animation-types.module.scss";

const TYPES = [
  {
    videoSrc: TypeCss,
    title: "CSS - basic transitions (Position, Rotation, Scale)",
    description:
      "Use CSS animations and transitions primarily for UI elements and other basic transitions and animations."
  },
  {
    videoSrc: TypeEmpty,
    title: "Lottie - complex and custom animations",
    description:
      "Lottie is a Json file exported directly from After Effects. The file is Lightweight and scaleable. To be used mainly in mobile, however, can be utilized also in unique or inteactive animations in the Descktop."
  },
  {
    videoSrc: TypeLike,
    title: "SVG - lightweight, scalable, easy to replace",
    description:
      "SVG animated file, exported from an animation software. Ideally to be used on icons or multiple assets. Easy to replace and adjust over time."
  },
  {
    videoSrc: TypeStatus,
    title: "Sprite",
    description:
      "A spritesheet is a PNG file that contains sequences of animation. It has improved performances when loading, but is not scaleable."
  }
];

export const AnimationTypes = () => {
  return (
    <div className={styles.animationTypesGrid}>
      {TYPES.map(({ videoSrc, title, description }) => (
        <AnimationInformationBox key={title} videoSrc={videoSrc} title={title} description={description} />
      ))}
    </div>
  );
};
