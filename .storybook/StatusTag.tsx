import React from "react";

export type StatusTagType = "beta" | "deprecated" | "new";

const styles = {
  new: { color: "#00854d", borderColor: "#00854d" },
  beta: { color: "#0073ea", borderColor: "#0073ea" },
  deprecated: { color: "#bb3354", borderColor: "#bb3354" }
};

export default function StatusTag({ type }: { type: StatusTagType }) {
  return <label style={{ borderRadius: "4px", border: "1px solid", padding: "0 4px", ...styles[type] }}>{type}</label>;
}
