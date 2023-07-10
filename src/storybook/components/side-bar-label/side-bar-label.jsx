import Flex from "../../../components/Flex/Flex";
import Chips from "../../../components/Chips/Chips";
import styles from "./side-bar-label.module.scss";

export function SideBarLabel({ name, beta, deprecated }) {
  if (beta) {
    return (
      <Flex align={Flex.align.CENTER}>
        {name}
        <Chips label="Beta" color={Chips.colors.EGG_YOLK} readOnly className={styles.chip} />
      </Flex>
    );
  } else if (deprecated) {
    return (
      <Flex align={Flex.align.CENTER}>
        {name}
        <Chips label="Deprecated" color={Chips.colors.NEGATIVE} readOnly className={styles.chip} />
      </Flex>
    );
  }
  return name;
}
