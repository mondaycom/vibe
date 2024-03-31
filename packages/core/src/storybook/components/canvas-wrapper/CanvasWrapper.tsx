import { Canvas, useOf } from "@storybook/blocks";
import { ComponentProps, FC, useMemo, useState } from "react";
import styles from "./CanvasWrapper.module.scss";

type CanvasWrapper = ComponentProps<typeof Canvas>;

const CanvasWrapper: FC<CanvasWrapper> = ({ of }) => {
  const [open, setOpen] = useState<boolean>(false);

  const { story } = useOf(of || "story", ["story"]);

  const toggleCodeAction = useMemo(
    () => ({
      title: "Toggle code editor",
      onClick: () => setOpen(prev => !prev)
    }),
    []
  );

  return (
    <>
      <Canvas of={of} sourceState={"none"} additionalActions={[toggleCodeAction]} className={styles.canvas} />
      <div id={story.id} className={styles.editorContainer} data-editor-open={open} />
    </>
  );
};

export default CanvasWrapper;
