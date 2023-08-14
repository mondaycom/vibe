import { VisualDescription, Frame } from "vibe-storybook-components";
import styles from "./text-styles.module.scss";
import { getStyle } from "../../../../helpers/typesciptCssModulesHelper";

export const TextStyles = () => {
  return (
    <Frame>
      <VisualDescription
        ariaLabel="H1"
        code="@include vibe-title('h1', 'bold');"
        title="H1 bold main heading"
        description="Use as main header on a page"
        visualDescriptionClassName={styles.visualExample}
      >
        <h2 className={getStyle(styles, "h1Bold")}>{`H1`}</h2>
      </VisualDescription>
      <VisualDescription
        ariaLabel="H1"
        code="@include vibe-title('h1', 'normal');"
        title="H1 normal main heading"
        description="Use as main header on a page"
        visualDescriptionClassName={styles.visualExample}
      >
        <h2 className={getStyle(styles, "h1Normal")}>{`H1`}</h2>
      </VisualDescription>
      <VisualDescription
        ariaLabel="H1"
        code="@include vibe-title('h1', 'light');"
        title="H1 light main heading"
        description="Use as main header on a page"
        visualDescriptionClassName={styles.visualExample}
      >
        <h2 className={getStyle(styles, "h1Light")}>{`H1`}</h2>
      </VisualDescription>
      <VisualDescription
        ariaLabel="H2"
        code="@include vibe-title('h2', 'bold');"
        title="H2 bold main heading"
        description="Use as main header on a page"
        visualDescriptionClassName={styles.visualExample}
      >
        <h2 className={getStyle(styles, "h2Bold")}>{`H2`}</h2>
      </VisualDescription>
      <VisualDescription
        ariaLabel="H2"
        code="@include vibe-title('h2', 'normal');"
        title="H2 normal main heading"
        description="Use as main header on a page"
        visualDescriptionClassName={styles.visualExample}
      >
        <h2 className={getStyle(styles, "h2Normal")}>{`H2`}</h2>
      </VisualDescription>
      <VisualDescription
        ariaLabel="H2"
        code="@include vibe-title('h2', 'light');"
        title="H2 light main heading"
        description="Use as main header on a page"
        visualDescriptionClassName={styles.visualExample}
      >
        <h2 className={getStyle(styles, "h2Light")}>{`H2`}</h2>
      </VisualDescription>
      <VisualDescription
        ariaLabel="H3"
        code="@include vibe-title('h3', 'bold');"
        title="H3 bold main heading"
        description="Use as main header on a page"
        visualDescriptionClassName={styles.visualExample}
      >
        <h3 className={getStyle(styles, "h3Bold")}>{`H3`}</h3>
      </VisualDescription>
      <VisualDescription
        ariaLabel="H3"
        code="@include vibe-title('h3', 'normal');"
        title="H3 normal main heading"
        description="Use as main header on a page"
        visualDescriptionClassName={styles.visualExample}
      >
        <h3 className={getStyle(styles, "h3Normal")}>{`H3`}</h3>
      </VisualDescription>
      <VisualDescription
        ariaLabel="H3"
        code="@include vibe-title('h3', 'light');"
        title="H3 light main heading"
        description="Use as main header on a page"
        visualDescriptionClassName={styles.visualExample}
      >
        <h3 className={getStyle(styles, "h3Light")}>{`H3`}</h3>
      </VisualDescription>
      <VisualDescription
        ariaLabel="Text"
        code="@include vibe-text('medium', 'normal');"
        title="Medium bold text"
        description="Use as plain text"
        visualDescriptionClassName={styles.visualExample}
      >
        <span className={getStyle(styles, "mediumBold")}>{`Text`}</span>
      </VisualDescription>
      <VisualDescription
        ariaLabel="Text"
        code="@include vibe-text('medium', 'normal');"
        title="Medium normal text"
        description="Use as plain text"
        visualDescriptionClassName={styles.visualExample}
      >
        <span className={getStyle(styles, "mediumNormal")}>{`Text`}</span>
      </VisualDescription>
      <VisualDescription
        ariaLabel="Text"
        code="@include vibe-text('small', 'bold');"
        title="Small bold text"
        description="Use as plain text"
        visualDescriptionClassName={styles.visualExample}
      >
        <span className={getStyle(styles, "smallBold")}>{`Text`}</span>
      </VisualDescription>
      <VisualDescription
        ariaLabel="Text"
        code="@include vibe-text('small', 'normal');"
        title="Small normal text"
        description="Use as plain text"
        visualDescriptionClassName={styles.visualExample}
      >
        <span className={getStyle(styles, "smallNormal")}>{`Text`}</span>
      </VisualDescription>
    </Frame>
  );
};
