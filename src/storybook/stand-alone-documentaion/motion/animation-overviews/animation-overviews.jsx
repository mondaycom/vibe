import { Flex } from "../../../../components/";
import { AnimationOverview } from "../animation-overview/animation-overview";
import { Focus } from "../assets";
import styles from "./animation-overviews.module.scss";

export const AnimationOverviews = () => {
  return (
    <div>
      <Flex gap={64} className={styles.row}>
        <AnimationOverview videoSrc={Focus} title={"sdsdsd"} description={"dfdf"} />
        <AnimationOverview videoSrc={Focus} title={"sdsdsd"} description={"dfdf"} />
      </Flex>
      <Flex gap={64} className={styles.row}>
        <AnimationOverview videoSrc={Focus} title={"sdsdsd"} description={"dfdf"} />
        <AnimationOverview videoSrc={Focus} title={"sdsdsd"} description={"dfdf"} />
      </Flex>
    </div>
  );
};
