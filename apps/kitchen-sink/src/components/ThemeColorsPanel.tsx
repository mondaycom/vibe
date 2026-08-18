import { Heading, Tab, TabList, TabsContext, Text } from "@vibe/core";
import { useState } from "react";
import { COLOR_TOKEN_SECTIONS } from "../lib/colorTokenDefinitions";
import { useKitchenSink } from "../context/KitchenSinkContext";
import { ThemeColorSwatch } from "./ThemeColorSwatch";

function ThemeColorSection({
  sectionId,
  title,
  description,
  tokens,
}: {
  sectionId: string;
  title: string;
  description?: string;
  tokens: (typeof COLOR_TOKEN_SECTIONS)[number]["tokens"];
}) {
  const { systemTheme, tokenOverrides, faceliftTheme, updateColorOverride } = useKitchenSink();
  const themeFamily = faceliftTheme ? "facelift" : "original";
  const themeColors = tokenOverrides.colors[themeFamily]?.[systemTheme] ?? {};

  return (
    <section key={sectionId} className="theme-section-row">
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

      <div className="theme-swatch-panel">
        {tokens.map((token) => {
          const override = themeColors[token.name];
          return (
            <ThemeColorSwatch
              key={`${themeFamily}-${systemTheme}-${token.name}`}
              token={token}
              value={override ?? ""}
              isOverridden={Boolean(override)}
              onChange={(next) => updateColorOverride(systemTheme, token.name, next)}
              onClear={() => updateColorOverride(systemTheme, token.name, "")}
            />
          );
        })}
      </div>
    </section>
  );
}

export function ThemeColorsPanel() {
  const [activeSectionTab, setActiveSectionTab] = useState(0);
  const visibleSections =
    activeSectionTab === 0
      ? COLOR_TOKEN_SECTIONS
      : [COLOR_TOKEN_SECTIONS[activeSectionTab - 1]!];

  return (
    <div className="theme-page">
      <header className="theme-page-header">
        <Heading type="h2" weight="medium">
          Backgrounds, text and layout
        </Heading>
        <Text type="text1" color="secondary">
          Shadows are not included in the theme. They are defined in the design system and should
          not be changed.
        </Text>
      </header>

      <TabsContext activeTabId={activeSectionTab}>
        <TabList
          className="theme-section-tabs"
          activeTabId={activeSectionTab}
          onTabChange={setActiveSectionTab}
        >
          <Tab>All</Tab>
          <Tab>Primary colors</Tab>
          <Tab>Text colors</Tab>
          <Tab>Status colors</Tab>
          <Tab>Utility</Tab>
          <Tab>Backgrounds</Tab>
        </TabList>
      </TabsContext>

      {visibleSections.map((section) => (
        <ThemeColorSection
          key={section.id}
          sectionId={section.id}
          title={section.title}
          description={section.description}
          tokens={section.tokens}
        />
      ))}
    </div>
  );
}
