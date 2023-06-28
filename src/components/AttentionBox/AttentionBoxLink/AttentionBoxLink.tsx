import { FC } from "react";
import styles from "./AttentionBoxLink.module.scss";

interface AttentionBoxLinkProps {
  href: string;
  text: string;
}
export const AttentionBoxLink: FC<AttentionBoxLinkProps> = ({ href, text }) => {
  return (
    <a className={styles.attentionBoxLink} href={href}>
      {text}
    </a>
  );
};
