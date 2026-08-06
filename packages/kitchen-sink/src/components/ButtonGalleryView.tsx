import { Button } from "@vibe/core";
import { Bolt, Check } from "@vibe/icons";
import type { ReactNode } from "react";

type ButtonKind = "primary" | "secondary" | "tertiary";
type ButtonSize = "xxs" | "xs" | "small" | "medium" | "large";
type ButtonColor =
  | "primary"
  | "positive"
  | "negative"
  | "inverted"
  | "brand"
  | "on-primary-color"
  | "on-inverted-background";

const KINDS: ButtonKind[] = ["primary", "secondary", "tertiary"];
const SIZES: { value: ButtonSize; label: string }[] = [
  { value: "large", label: "Large" },
  { value: "medium", label: "Medium" },
  { value: "small", label: "Small" },
  { value: "xs", label: "XS" },
  { value: "xxs", label: "XXS" },
];
const COLORS: { value: ButtonColor; label: string }[] = [
  { value: "primary", label: "Primary" },
  { value: "positive", label: "Positive" },
  { value: "negative", label: "Negative" },
  { value: "inverted", label: "Inverted" },
  { value: "brand", label: "Brand" },
];

function VariantSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="button-gallery-section">
      <h2 className="button-gallery-section-title">{title}</h2>
      <div className="button-gallery-row">{children}</div>
    </section>
  );
}

export function ButtonGalleryView() {
  return (
    <div className="component-gallery button-gallery">
      <header className="component-gallery-header">
        <h1 className="component-gallery-title">Button</h1>
        <p className="component-gallery-description">
          All kinds, sizes, colors, icon placements, and states — including icons across every size.
        </p>
      </header>

      <VariantSection title="Kinds">
        {KINDS.map((kind) => (
          <Button key={kind} kind={kind} onClick={() => {}}>
            {kind.charAt(0).toUpperCase() + kind.slice(1)}
          </Button>
        ))}
      </VariantSection>

      <VariantSection title="Sizes">
        {SIZES.map(({ value, label }) => (
          <Button key={value} size={value} onClick={() => {}}>
            {label}
          </Button>
        ))}
      </VariantSection>

      <VariantSection title="Icons — left">
        {SIZES.map(({ value, label }) => (
          <Button key={`left-${value}`} size={value} leftIcon={Bolt} onClick={() => {}}>
            {label}
          </Button>
        ))}
      </VariantSection>

      <VariantSection title="Icons — right">
        {SIZES.map(({ value, label }) => (
          <Button key={`right-${value}`} size={value} rightIcon={Bolt} onClick={() => {}}>
            {label}
          </Button>
        ))}
      </VariantSection>

      <VariantSection title="Icons — both">
        {SIZES.map(({ value, label }) => (
          <Button
            key={`both-${value}`}
            size={value}
            leftIcon={Bolt}
            rightIcon={Bolt}
            onClick={() => {}}
          >
            {label}
          </Button>
        ))}
      </VariantSection>

      <VariantSection title="Icons × kinds">
        {KINDS.flatMap((kind) => [
          <Button key={`${kind}-left`} kind={kind} leftIcon={Bolt} onClick={() => {}}>
            Left
          </Button>,
          <Button key={`${kind}-right`} kind={kind} rightIcon={Bolt} onClick={() => {}}>
            Right
          </Button>,
          <Button
            key={`${kind}-both`}
            kind={kind}
            leftIcon={Bolt}
            rightIcon={Bolt}
            onClick={() => {}}
          >
            Both
          </Button>,
        ])}
      </VariantSection>

      <VariantSection title="Sizes × kinds">
        {SIZES.flatMap(({ value, label }) =>
          KINDS.map((kind) => (
            <Button key={`${value}-${kind}`} size={value} kind={kind} onClick={() => {}}>
              {label}
            </Button>
          ))
        )}
      </VariantSection>

      <VariantSection title="Sizes × kinds with left icon">
        {SIZES.flatMap(({ value, label }) =>
          KINDS.map((kind) => (
            <Button
              key={`icon-${value}-${kind}`}
              size={value}
              kind={kind}
              leftIcon={Bolt}
              onClick={() => {}}
            >
              {label}
            </Button>
          ))
        )}
      </VariantSection>

      <VariantSection title="Colors">
        {COLORS.flatMap(({ value, label }) =>
          KINDS.map((kind) => (
            <Button key={`${value}-${kind}`} kind={kind} color={value} onClick={() => {}}>
              {label}
            </Button>
          ))
        )}
      </VariantSection>

      <VariantSection title="States">
        {KINDS.map((kind) => (
          <Button key={`default-${kind}`} kind={kind} onClick={() => {}}>
            Default
          </Button>
        ))}
        {KINDS.map((kind) => (
          <Button key={`active-${kind}`} kind={kind} active onClick={() => {}}>
            Active
          </Button>
        ))}
        {KINDS.map((kind) => (
          <Button key={`disabled-${kind}`} kind={kind} disabled onClick={() => {}}>
            Disabled
          </Button>
        ))}
        {KINDS.map((kind) => (
          <Button key={`loading-${kind}`} kind={kind} loading onClick={() => {}}>
            Loading
          </Button>
        ))}
        {KINDS.map((kind) => (
          <Button
            key={`success-${kind}`}
            kind={kind}
            success
            successIcon={Check}
            successText="Success"
            onClick={() => {}}
          >
            Success
          </Button>
        ))}
      </VariantSection>

      <VariantSection title="On color">
        <div className="button-gallery-on-color">
          {KINDS.map((kind) => (
            <Button
              key={`on-primary-${kind}`}
              kind={kind}
              color="on-primary-color"
              leftIcon={Bolt}
              onClick={() => {}}
            >
              {kind.charAt(0).toUpperCase() + kind.slice(1)}
            </Button>
          ))}
        </div>
        <div className="button-gallery-on-inverted">
          {KINDS.map((kind) => (
            <Button
              key={`on-inverted-${kind}`}
              kind={kind}
              color="on-inverted-background"
              leftIcon={Bolt}
              onClick={() => {}}
            >
              {kind.charAt(0).toUpperCase() + kind.slice(1)}
            </Button>
          ))}
        </div>
      </VariantSection>
    </div>
  );
}
