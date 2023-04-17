import { FC } from "react";
import Link from "../../Link/Link";
import styles from "./AttentionBoxLink.module.scss";

interface AttentionBoxLinkProps {
  href: string;
  text: string;
}
export const AttentionBoxLink: FC<AttentionBoxLinkProps> = ({ href, text }) => {
  return <Link className={styles.attentionBoxLink} href={href} text={text} />;
};
