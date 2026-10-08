// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { sanitizeSvgContent } from "../sanitizeSvgContent";

describe("sanitizeSvgContent", () => {
  it("keeps a plain svg icon", () => {
    const svg = '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M1 1h14v14H1z"></path></svg>';
    const result = sanitizeSvgContent(svg);
    expect(result).toContain("<svg");
    expect(result).toContain('d="M1 1h14v14H1z"');
    expect(result).toContain('fill="currentColor"');
  });

  it("removes script tags", () => {
    const result = sanitizeSvgContent('<svg><script>alert(1)</script><path d="M0 0"></path></svg>');
    expect(result).not.toContain("script");
    expect(result).not.toContain("alert");
    expect(result).toContain("<path");
  });

  it("removes inline event handlers", () => {
    const result = sanitizeSvgContent('<svg onload="alert(1)"><path d="M0 0" onclick="alert(2)"></path></svg>');
    expect(result).not.toMatch(/onload|onclick|alert/);
  });

  it("removes foreignObject content", () => {
    const result = sanitizeSvgContent(
      '<svg><foreignObject><iframe src="javascript:alert(1)"></iframe><img src=x onerror="alert(1)"></foreignObject></svg>'
    );
    expect(result).not.toMatch(/foreignObject|iframe|onerror|alert/i);
  });

  it("removes javascript: hrefs", () => {
    const result = sanitizeSvgContent('<svg><a href="javascript:alert(1)"><text>x</text></a></svg>');
    expect(result).not.toContain("javascript:");
  });
});
