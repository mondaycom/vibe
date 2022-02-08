import cx from "classnames";
import { VisualDescription, Frame } from "../../../components";
import Heading from "../../../../components/Heading/Heading";
import { BEMClass } from "../../../../helpers/bem-helper";
import "./text-styles.scss";

const CSS_BASE_CLASS = "monday-storybook-text-description";
const bemHelper = BEMClass(CSS_BASE_CLASS);

export const TextStyles = () => {
  return (
    <Frame>
      <VisualDescription
        className={CSS_BASE_CLASS}
        ariaLabel="H1"
        title="Main heading (Roboto 32px bold)"
        description="Use as main header on a page"
      >
        <Heading
          type={Heading.types.h1}
          value="H1"
          ellipsis={false}
          className={cx(
            bemHelper({ element: "visual-element" }),
            bemHelper({ element: "visual-element", state: "heading" })
          )}
        />
      </VisualDescription>
      <VisualDescription
        className="monday-storybook-text-description"
        ariaLabel="H2"
        title="Secondary heading (Roboto 24px bold)"
        description="Use as secondary header on a page"
      >
        <Heading
          type={Heading.types.h2}
          value="H2"
          ellipsis={false}
          className={cx(
            bemHelper({ element: "visual-element" }),
            bemHelper({ element: "visual-element", state: "heading" })
          )}
        />
      </VisualDescription>
      <VisualDescription
        className={CSS_BASE_CLASS}
        ariaLabel="H3"
        title="Tertiary heading (Roboto 24px light)"
        description="Use after heading, profile page headings"
      >
        <Heading
          type={Heading.types.h3}
          value="H3"
          className={cx(
            bemHelper({ element: "visual-element" }),
            bemHelper({ element: "visual-element", state: "heading" })
          )}
        />
      </VisualDescription>
      <VisualDescription
        className={CSS_BASE_CLASS}
        ariaLabel="H4"
        title="Fourth heading (Roboto 18px bold)"
        description="Use for subtitles, group name, subheading in admin"
      >
        <Heading
          type={Heading.types.h4}
          value="H4"
          className={cx(
            bemHelper({ element: "visual-element" }),
            bemHelper({ element: "visual-element", state: "heading" })
          )}
        />
      </VisualDescription>
      <VisualDescription
        ariaLabel="H5"
        title="Fourth heading (Roboto 16px bold)"
        className={CSS_BASE_CLASS}
        description="Use as subtitles for paragraphs"
      >
        <Heading
          type={Heading.types.h5}
          value="H5"
          className={cx(
            bemHelper({ element: "visual-element" }),
            bemHelper({ element: "visual-element", state: "heading" })
          )}
        />
      </VisualDescription>
      <VisualDescription
        ariaLabel="text"
        title="UI labels / General text (Roboto 14px normal)"
        description="Use for general text or labels"
        className={CSS_BASE_CLASS}
      >
        <span
          className={cx(
            bemHelper({ element: "visual-element" }),
            bemHelper({ element: "visual-element", state: "regular-text" })
          )}
        >
          text
        </span>
      </VisualDescription>
      <VisualDescription
        ariaLabel="paragraph"
        className={CSS_BASE_CLASS}
        title="Paragraph text (Roboto 16px normal)"
        description="Use for item name, text in update"
      >
        <span
          className={cx(
            bemHelper({ element: "visual-element" }),
            bemHelper({ element: "visual-element", state: "paragraph" })
          )}
        >
          {"<p>"}
        </span>
      </VisualDescription>
      <VisualDescription
        title="Caption/Subtext (Roboto 14px normal)"
        className={CSS_BASE_CLASS}
        description="Use for subtexts"
      >
        <span
          className={cx(
            bemHelper({ element: "visual-element" }),
            bemHelper({ element: "visual-element", state: "subtext" })
          )}
        >
          subtext
        </span>
      </VisualDescription>
      <VisualDescription
        title="Link text (Roboto 14px normal)"
        className="monday-storybook-text-description"
        description="Use for links"
      >
        <span
          className={cx(
            bemHelper({ element: "visual-element" }),
            bemHelper({ element: "visual-element", state: "link" })
          )}
        >
          Link
        </span>
      </VisualDescription>
    </Frame>
  );
};
