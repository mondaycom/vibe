import { AnimationInformationBox } from "../animation-information-box/animation-information-box";
import { TypeCss, TypeEmpty, TypeLike, TypeStatus } from "../assets";
import styles from "./animation-types.module.scss";

const TYPES = [
  {
    videoSrc: TypeCss,
    title: "Css - basic transitions (Position, Rotation, Scale)",
    description:
      "CSS animations and transitions should primarily be used for UI elements and other basic transitions and animations."
  },
  {
    videoSrc: TypeEmpty,
    title: "Lottie - complex and custom animations",
    description:
      "Lottie is a Json file exported directly from After Effects. The file is Lightweight and scaleable. Mainly used in mobile, however, can be used in unique or inteactive animations."
  },
  {
    videoSrc: TypeLike,
    title: "SVG - lightweight, scalable, easy to replace",
    description:
      "SVG animated file, exported from an Animation software. Better to use on icons or multiple assets. easy to replace and adjust throught time."
  },
  {
    videoSrc: TypeStatus,
    title: "Sprite",
    description:
      "A spritesheet is a PNG file that containes sequence of animation. It has improved performances when loading, but, it is not scaleable"
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
