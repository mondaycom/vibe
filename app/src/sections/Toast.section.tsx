import { useState } from "react";
import { Button, Toast } from "@vibe/core";
import type { Section } from "../section";

const controls: Section["controls"] = [
  {
    key: "type",
    label: "Type",
    type: "select",
    options: [
      { value: "positive", label: "Positive" },
      { value: "negative", label: "Negative" },
      { value: "warning", label: "Warning" },
      { value: "normal", label: "Normal" },
      { value: "dark", label: "Dark" },
    ],
  },
  { key: "withAction", label: "Show action", type: "boolean" },
];

const defaultState = {
  type: "positive",
  withAction: false,
};

const Demo: Section["Demo"] = ({ state }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Show toast</Button>
      <Toast
        open={open}
        type={state.type as "normal" | "positive" | "negative" | "warning" | "dark"}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        actions={state.withAction ? [{ type: "button", content: "Undo" }] : undefined}
      >
        Changes saved successfully
      </Toast>
    </>
  );
};

const section: Section = {
  id: "toast",
  title: "Toast",
  defaultState,
  controls,
  Demo,
};

export default section;
