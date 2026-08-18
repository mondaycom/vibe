import { Heading, Tab, TabList, TabsContext, Text, TextField } from "@vibe/core";
import { useState } from "react";
import { useKitchenSink } from "../context/KitchenSinkContext";
import {
  TYPOGRAPHY_TOKEN_SECTIONS,
  type TypographyTokenDef,
} from "../lib/typographyTokenDefinitions";

function ThemeTypographyTokenCard({
  token,
  value,
  onChange,
}: {
  token: TypographyTokenDef;
  value: string;
  onChange: (value: string) => void;
}) {
  const stored = value
    ? token.unit
      ? value.replace(token.unit, "")
      : value
    : token.defaultValue;

  return (
    <div className="theme-token-card">
      <Text type="text2" weight="medium">
        {token.label}
      </Text>
      {token.description && (
        <Text type="text2" color="secondary">
          {token.description}
        </Text>
      )}
      <TextField
        size="small"
        value={String(stored)}
        onChange={(val) => onChange(`${val}${token.unit ?? ""}`)}
      />
    </div>
  );
}

function ThemeTypographySection({
  title,
  description,
  tokens,
}: {
  title: string;
  description?: string;
  tokens: TypographyTokenDef[];
}) {
  const { tokenOverrides, updateTokenOverrides } = useKitchenSink();
  const bucket = tokenOverrides.typography;

  return (
    <section className="theme-section-row">
      <div className="theme-section-copy">
        <Heading type="h3" weight="medium">
          {title}
        </Heading>
        {description && (
          <Text type="text1" color="secondary">
            {description}
          </Text>
        )}
      </div>

      <div className="theme-swatch-panel theme-token-panel">
        {tokens.map((token) => (
          <ThemeTypographyTokenCard
            key={token.id}
            token={token}
            value={bucket[token.cssVar] ?? ""}
            onChange={(next) =>
              updateTokenOverrides({
                typography: { ...bucket, [token.cssVar]: next },
              })
            }
          />
        ))}
      </div>
    </section>
  );
}

function getVisibleTypographySections(activeTab: number) {
  if (activeTab === 0) return TYPOGRAPHY_TOKEN_SECTIONS;
  if (activeTab === 5) {
    return TYPOGRAPHY_TOKEN_SECTIONS.filter(
      (section) => section.id === "semantic-sizes" || section.id === "semantic-line-heights"
    );
  }
  return [TYPOGRAPHY_TOKEN_SECTIONS[activeTab - 1]!];
}

export function ThemeTypographyPanel() {
  const [activeSectionTab, setActiveSectionTab] = useState(0);
  const visibleSections = getVisibleTypographySections(activeSectionTab);

  return (
    <div className="theme-page">
      <header className="theme-page-header">
        <Heading type="h2" weight="medium">
          Typography
        </Heading>
        <Text type="text1" color="secondary">
          Font families, sizes, line heights, and text style tokens from the Vibe design system.
        </Text>
      </header>

      <TabsContext activeTabId={activeSectionTab}>
        <TabList
          className="theme-section-tabs"
          activeTabId={activeSectionTab}
          onTabChange={setActiveSectionTab}
        >
          <Tab>All</Tab>
          <Tab>Families</Tab>
          <Tab>Weights</Tab>
          <Tab>Sizes</Tab>
          <Tab>Line heights</Tab>
          <Tab>Semantic</Tab>
          <Tab>Text styles</Tab>
        </TabList>
      </TabsContext>

      {visibleSections.map((section) => (
        <ThemeTypographySection
          key={section.id}
          title={section.title}
          description={section.description}
          tokens={section.tokens}
        />
      ))}
    </div>
  );
}
