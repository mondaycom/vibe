import { useEffect, useRef, useState } from "react";
import { useKitchenSink } from "../context/KitchenSinkContext";
import { sections } from "../sections";
import { ComponentControlBar } from "./ComponentControlBar";
import { ComponentGrid } from "./ComponentGrid";
import type { Section } from "../types";

const EXIT_MS = 300;
const ENTER_MS = 360;

type BarAnimation = "none" | "exit" | "enter";

export function ComponentsView() {
  const {
    componentStates,
    focusedComponentId,
    setFocusedComponentId,
    updateComponentState,
  } = useKitchenSink();

  const focusedSection = sections.find((s) => s.id === focusedComponentId) ?? sections[0];

  const [shownSection, setShownSection] = useState<Section>(focusedSection);
  const [animation, setAnimation] = useState<BarAnimation>("none");
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (focusedSection.id === shownSection.id) return;

    setAnimation("exit");
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setShownSection(focusedSection);
      setAnimation("enter");
      timerRef.current = setTimeout(() => setAnimation("none"), ENTER_MS);
    }, EXIT_MS);

    return () => clearTimeout(timerRef.current);
  }, [focusedSection, shownSection.id]);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  return (
    <div className="components-view">
      <ComponentGrid
        componentStates={componentStates}
        focusedComponentId={focusedComponentId}
        onFocus={setFocusedComponentId}
      />
      <div className="control-bar-dock">
        <ComponentControlBar
          key={shownSection.id}
          section={shownSection}
          state={componentStates[shownSection.id] ?? shownSection.defaultState}
          onChange={(patch) => updateComponentState(shownSection.id, patch)}
          status={animation === "none" ? undefined : animation}
        />
      </div>
    </div>
  );
}
