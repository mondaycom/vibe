import React from "react";
import { Canvas, useOf } from "@storybook/blocks";
import { ComponentProps, FC, useMemo, useState } from "react";
import styles from "./CanvasWrapper.module.scss";
import cx from "classnames";

interface CanvasWrapper extends ComponentProps<typeof Canvas> {
  theme?: "light" | "dark" | "black";
}

const themeToGlobalClassName = {
  light: "light-app-theme",
  dark: "dark-app-theme",
  black: "black-app-theme"
};

const CanvasWrapper: FC<CanvasWrapper> = ({ of, theme, className, ...rest }) => {
  const [open, setOpen] = useState<boolean>(false);

  // resolve Storybook story module to get the story id and parameters of current rendered story
  const { story } = useOf(of, ["story"]);

  const toggleCodeAction = useMemo(
    () => ({
      title: "Story Editor",
      onClick: () => setOpen(prev => !prev)
    }),
    []
  );

  const sourceState = story.parameters.docs?.sourceState;
  const liveEditEnabledForStory = sourceState !== "none" && story.parameters.docs?.liveEdit?.isEnabled;

  return (
    <>
      <Canvas
        of={of}
        sourceState={sourceState || (liveEditEnabledForStory ? "none" : "hidden")}
        additionalActions={liveEditEnabledForStory ? [toggleCodeAction] : []}
        className={cx(styles.canvas, themeToGlobalClassName[theme], className)}
        {...rest}
      />
      {liveEditEnabledForStory && <div id={story.id} className={styles.editorContainer} data-editor-open={open} />}
    </>
  );
};

export default CanvasWrapper;
