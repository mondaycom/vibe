import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

export function DiffCodeBlock({ code }: { code: string }) {
  return (
    <SyntaxHighlighter
      language="diff"
      style={{
        ...prism,
        deleted: {
          color: "#a31515"
        },
        inserted: {
          color: "#09885a"
        }
      }}
      customStyle={{
        backgroundColor: "transparent",
        boxShadow: "rgba(0, 0, 0, 0.10) 0 1px 3px 0",
        border: "1px solid hsla(203, 50%, 30%, 0.15)"
      }}
      codeTagProps={{
        style: {
          margin: 0,
          fontFamily: "monospace",
          fontSize: "13px",
          backgroundColor: "transparent",
          border: "none",
          lineHeight: "19px"
        }
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
}
