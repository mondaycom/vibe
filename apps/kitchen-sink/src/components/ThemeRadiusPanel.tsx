import { Heading, Text, TextField } from "@vibe/core";
import { useKitchenSink } from "../context/KitchenSinkContext";
import { TOKEN_FIELDS_BY_SUBPAGE } from "../lib/tokenDefinitions";

export function ThemeRadiusPanel() {
  const { tokenOverrides, updateTokenOverrides } = useKitchenSink();
  const fields = TOKEN_FIELDS_BY_SUBPAGE.radius;
  const bucket = tokenOverrides.radius;

  return (
    <div className="theme-page">
      <header className="theme-page-header">
        <Heading type="h2" weight="medium">
          Border radius
        </Heading>
        <Text type="text1" color="secondary">
          Corner radius tokens used across components.
        </Text>
      </header>

      <div className="theme-swatch-panel theme-token-panel">
          {fields.map((field) => {
            const rawValue = bucket[field.cssVar];
            const stored = rawValue
              ? field.unit
                ? rawValue.replace(field.unit, "")
                : rawValue
              : field.defaultValue;

            return (
              <div key={field.id} className="theme-token-card">
                <Text type="text2" weight="medium">
                  {field.label}
                </Text>
                {field.description && (
                  <Text type="text2" color="secondary">
                    {field.description}
                  </Text>
                )}
                <div
                  className="theme-radius-preview-box"
                  style={{
                    borderRadius: `var(${field.cssVar}, ${field.defaultValue}px)`,
                  }}
                >
                  <Text type="text2">{stored}px</Text>
                </div>
                <TextField
                  size="small"
                  value={String(stored)}
                  onChange={(val) => {
                    const next = `${val}${field.unit ?? ""}`;
                    updateTokenOverrides({
                      radius: { ...bucket, [field.cssVar]: next },
                    });
                  }}
                />
              </div>
            );
          })}
        </div>
    </div>
  );
}
