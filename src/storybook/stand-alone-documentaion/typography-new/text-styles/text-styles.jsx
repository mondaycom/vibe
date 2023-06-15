import { VisualDescription, Frame } from "../../../components";
import styles from "./text-styles.module.scss";

export const TextStyles = () => {
  return (
    <Frame>
      <VisualDescription
        ariaLabel="H1"
        code="classname='vibe-h1-bold'"
        title="H1 bold main heading"
        description="Use as main header on a page"
        visualDescriptionClassName={styles.visualExample}
      >
        <h1 className="vibe-h1-bold">{`H1`}</h1>
      </VisualDescription>
      <VisualDescription
        ariaLabel="H1"
        code="classname='vibe-h1-normal'"
        title="H1 normal main heading"
        description="Use as main header on a page"
        visualDescriptionClassName={styles.visualExample}
      >
        <h1 className="vibe-h1-normal">{`H1`}</h1>
      </VisualDescription>
      <VisualDescription
        ariaLabel="H1"
        code="classname='vibe-h1-light'"
        title="H1 light main heading"
        description="Use as main header on a page"
        visualDescriptionClassName={styles.visualExample}
      >
        <h1 className="vibe-h1-light">{`H1`}</h1>
      </VisualDescription>
      <VisualDescription
        ariaLabel="H2"
        code="classname='vibe-h2-bold'"
        title="H2 bold main heading"
        description="Use as main header on a page"
        visualDescriptionClassName={styles.visualExample}
      >
        <h2 className="vibe-h2-bold">{`H2`}</h2>
      </VisualDescription>
      <VisualDescription
        ariaLabel="H2"
        code="classname='vibe-h2-normal'"
        title="H2 normal main heading"
        description="Use as main header on a page"
        visualDescriptionClassName={styles.visualExample}
      >
        <h2 className="vibe-h2-normal">{`H2`}</h2>
      </VisualDescription>
      <VisualDescription
        ariaLabel="H2"
        code="classname='vibe-h2-light'"
        title="H2 light main heading"
        description="Use as main header on a page"
        visualDescriptionClassName={styles.visualExample}
      >
        <h1 className="vibe-h2-light">{`H2`}</h1>
      </VisualDescription>
      <VisualDescription
        ariaLabel="H3"
        code="classname='vibe-h3-bold'"
        title="H3 bold main heading"
        description="Use as main header on a page"
        visualDescriptionClassName={styles.visualExample}
      >
        <h3 className="vibe-h3-bold">{`H3`}</h3>
      </VisualDescription>
      <VisualDescription
        ariaLabel="H3"
        code="classname='vibe-h3-normal'"
        title="H3 normal main heading"
        description="Use as main header on a page"
        visualDescriptionClassName={styles.visualExample}
      >
        <h3 className="vibe-h3-normal">{`H3`}</h3>
      </VisualDescription>
      <VisualDescription
        ariaLabel="H3"
        code="classname='vibe-h3-light'"
        title="H3 light main heading"
        description="Use as main header on a page"
        visualDescriptionClassName={styles.visualExample}
      >
        <h3 className="vibe-h3-light">{`H3`}</h3>
      </VisualDescription>
      <VisualDescription
        ariaLabel="Text"
        code="classname='vibe-text1-bold'"
        title="Plain text"
        description="Use as plain text"
      >
        <span className="vibe-text1-bold">{`Text1`}</span>
      </VisualDescription>
      <VisualDescription
        ariaLabel="Text"
        code="classname='vibe-text1-normal'"
        title="Plain text"
        description="Use as plain text"
      >
        <span className="vibe-text1-normal">{`Text1`}</span>
      </VisualDescription>
      <VisualDescription
        ariaLabel="Text"
        code="classname='vibe-text2-bold'"
        title="Plain text"
        description="Use as plain text"
      >
        <span className="vibe-text2-bold">{`Text2`}</span>
      </VisualDescription>
      <VisualDescription
        ariaLabel="Text"
        code="classname='vibe-text2-normal'"
        title="Plain text"
        description="Use as plain text"
      >
        <span className="vibe-text2-normal">{`Text2`}</span>
      </VisualDescription>
    </Frame>
  );
};
