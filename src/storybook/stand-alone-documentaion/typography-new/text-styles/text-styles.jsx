import { VisualDescription, Frame } from "../../../components";
import "./text-styles.scss";

const CSS_BASE_CLASS = "monday-storybook-text-description";

export const TextStyles = () => {
  return (
    <Frame>
      <VisualDescription
        className={CSS_BASE_CLASS}
        ariaLabel="H1"
        code="font: var(--font-h1-bold)"
        title="H1 bold main heading"
        description="Use as main header on a page"
      >
        <h1 style={{ font: "var(--font-h1-bold)" }}>{`H1`}</h1>
      </VisualDescription>
      <VisualDescription
        className={CSS_BASE_CLASS}
        ariaLabel="H1"
        code="font: var(--font-h1-normal)"
        title="H1 bold main heading"
        description="Use as main header on a page"
      >
        <h1 style={{ font: "var(--font-h1-normal)" }}>{`H1`}</h1>
      </VisualDescription>
      <VisualDescription
        className={CSS_BASE_CLASS}
        ariaLabel="H1"
        code="font: var(--font-h1-light)"
        title="H1 bold main heading"
        description="Use as main header on a page"
      >
        <h1 style={{ font: "var(--font-h1-light)" }}>{`H1`}</h1>
      </VisualDescription>
      <VisualDescription
        className={CSS_BASE_CLASS}
        ariaLabel="H2"
        code="font: var(--font-h2-bold)"
        title="H1 bold main heading"
        description="Use as main header on a page"
      >
        <h1 style={{ font: "var(--font-h2-bold)" }}>{`H1`}</h1>
      </VisualDescription>
      <VisualDescription
        className={CSS_BASE_CLASS}
        ariaLabel="H2"
        code="font: var(--font-h2-normal)"
        title="H1 bold main heading"
        description="Use as main header on a page"
      >
        <h1 style={{ font: "var(--font-h2-normal)" }}>{`H1`}</h1>
      </VisualDescription>
      <VisualDescription
        className={CSS_BASE_CLASS}
        ariaLabel="H2"
        code="font: var(--font-h2-light)"
        title="H1 bold main heading"
        description="Use as main header on a page"
      >
        <h1 style={{ font: "var(--font-h2-light)" }}>{`H1`}</h1>
      </VisualDescription>
      <VisualDescription
        className={CSS_BASE_CLASS}
        ariaLabel="H3"
        code="font: var(--font-h3-bold)"
        title="H1 bold main heading"
        description="Use as main header on a page"
      >
        <h1 style={{ font: "var(--font-h3-bold)" }}>{`H1`}</h1>
      </VisualDescription>
      <VisualDescription
        className={CSS_BASE_CLASS}
        ariaLabel="H3"
        code="font: var(--font-h3-normal)"
        title="H1 bold main heading"
        description="Use as main header on a page"
      >
        <h1 style={{ font: "var(--font-h3-normal)" }}>{`H1`}</h1>
      </VisualDescription>
      <VisualDescription
        className={CSS_BASE_CLASS}
        ariaLabel="H3"
        code="font: var(--font-h3-light)"
        title="H1 bold main heading"
        description="Use as main header on a page"
      >
        <h1 style={{ font: "var(--font-h3-light)" }}>{`H1`}</h1>
      </VisualDescription>
      <VisualDescription
        className={CSS_BASE_CLASS}
        ariaLabel="Text"
        code="font: var(--font-text-bold)"
        title="Plain text"
        description="Use as plain text"
      >
        <span style={{ font: "var(--font-text1-bold)" }}>{`Text1`}</span>
      </VisualDescription>
      <VisualDescription
        className={CSS_BASE_CLASS}
        ariaLabel="Text"
        code="font: var(--font-text-bold)"
        title="Plain text"
        description="Use as plain text"
      >
        <span style={{ font: "var(--font-text1-normal)" }}>{`Text1`}</span>
      </VisualDescription>
      <VisualDescription
        className={CSS_BASE_CLASS}
        ariaLabel="Text"
        code="font: var(--font-text-bold)"
        title="Plain text"
        description="Use as plain text"
      >
        <span style={{ font: "var(--font-text2-bold)" }}>{`Text2`}</span>
      </VisualDescription>
      <VisualDescription
        className={CSS_BASE_CLASS}
        ariaLabel="Text"
        code="font: var(--font-text-bold)"
        title="Plain text"
        description="Use as plain text"
      >
        <span style={{ font: "var(--font-text2-normal)" }}>{`Text2`}</span>
      </VisualDescription>
    </Frame>
  );
};
