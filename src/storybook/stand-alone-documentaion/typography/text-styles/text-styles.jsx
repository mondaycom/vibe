import { VisualDescription, Frame } from "../../../components";
import "./text-styles.scss";

const CSS_BASE_CLASS = "monday-storybook-text-description";

export const TextStyles = () => {
  return (
    <Frame>
      <VisualDescription
        className={CSS_BASE_CLASS}
        ariaLabel="H1"
        code="font: var(--font-h1)"
        title="H1 Main heading"
        description="Use as main header on a page"
      >
        <h1 style={{ font: "var(--font-h1)" }}>{`H1`}</h1>
      </VisualDescription>
      <VisualDescription
        className="monday-storybook-text-description"
        ariaLabel="H2"
        code="font: var(--font-h2)"
        title="H2 Secondary heading"
        description="Use as secondary header on a page"
      >
        <h2 style={{ font: "var(--font-h2)" }}>{`H2`}</h2>
      </VisualDescription>
      <VisualDescription
        className={CSS_BASE_CLASS}
        ariaLabel="H3"
        code="font: var(--font-h3)"
        title="H3 Tertiary heading"
        description="Use after heading, profile page headings"
      >
        <h3 style={{ font: "var(--font-h3)" }}>{`H3`}</h3>
      </VisualDescription>
      <VisualDescription
        className={CSS_BASE_CLASS}
        ariaLabel="H4"
        code="font: var(--font-h4)"
        title="H4 Fourth heading"
        description="Use for subtitles, group name, subheading in admin"
      >
        <h4 style={{ font: "var(--font-h4)" }}>{`H4`}</h4>
      </VisualDescription>
      <VisualDescription
        ariaLabel="H5"
        code="font: var(--font-h5)"
        title="H5 Paragraph"
        className={CSS_BASE_CLASS}
        description="Use as subtitles for paragraphs"
      >
        <h5 style={{ font: "var(--font-h5)" }}>{`H5`}</h5>
      </VisualDescription>
      <VisualDescription
        ariaLabel="text"
        code="font: var(--font-general-label)"
        title="H6 UI text"
        description="Use for general text or labels"
        className={CSS_BASE_CLASS}
      >
        <span style={{ font: "var(--font-general-label)" }}>text</span>
      </VisualDescription>
      <VisualDescription
        ariaLabel="paragraph"
        className={CSS_BASE_CLASS}
        code="font: var(--font-paragraph)"
        title="P Paragraph text"
        description="Use for item name, text in update"
      >
        <span style={{ font: "var(--font-paragraph)" }}>{"<p>"}</span>
      </VisualDescription>
      <VisualDescription
        code="font: var(--font-subtext)"
        title="Medium Text"
        className={CSS_BASE_CLASS}
        description="Use for subtexts"
      >
        <span style={{ font: "var(--font-subtext)" }}>subtext</span>
      </VisualDescription>
      <VisualDescription
        code="font: var(--font-general-label); color: var(--link-color)"
        title="Medium text link"
        className="monday-storybook-text-description"
        description="Use for links"
      >
        <span style={{ font: "var(--font-general-label)", color: "var(--link-color)" }}>Link</span>
      </VisualDescription>
    </Frame>
  );
};
