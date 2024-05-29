import { Decorator, StoryContext } from "@storybook/react";
import React, { useMemo } from "react";
import { githubDark } from "@uiw/codemirror-theme-github";
import { langs } from "@uiw/codemirror-extensions-langs";
import { createPortal } from "react-dom";
import LiveEditor from "../../components/live-editor/LiveEditor";
import LiveContent from "./components/LiveContent/LiveContent";
import LiveEditorAction from "./components/LiveEditorAction/LiveEditorAction";
import styles from "./withLiveEdit.module.scss";
import useLiveEditorActions from "./hooks/useLiveEditorActions";

const withLiveEdit: Decorator = (Story, context: StoryContext) => {
  const { id, parameters, viewMode, moduleExport } = context;
  const { source: sourceParams, liveEdit: liveEditParams } = parameters.docs || {};
  const canvasEditorContainer = useMemo(() => document.getElementById(id), [id]);
  const shouldAllowLiveEdit = viewMode === "docs" && liveEditParams?.isEnabled && !!canvasEditorContainer;

  const { code, isDirty, onChange, onCopyClick, isCopied, onFormatClick, onResetClick } = useLiveEditorActions(
    sourceParams?.originalSource
  );

  if (!shouldAllowLiveEdit) {
    return <Story />;
  }

  return (
    <>
      {isDirty ? (
        <LiveContent
          code={code}
          scope={liveEditParams?.scope}
          decorators={moduleExport.decorators || []}
          context={context}
        />
      ) : (
        <Story />
      )}
      {createPortal(
        <>
          <LiveEditor
            placeholder={"Insert code here"}
            code={code}
            theme={githubDark}
            extensions={[langs.tsx()]}
            style={{ fontSize: 13 }}
            onChange={onChange}
            setup={{
              lineNumbers: false,
              foldGutter: false,
              highlightActiveLine: false,
              autocompletion: false
            }}
          />
          <section className={styles.actions}>
            <LiveEditorAction onClick={onCopyClick} disabled={isCopied}>
              {isCopied ? "Copied" : "Copy"}
            </LiveEditorAction>
            <LiveEditorAction onClick={onFormatClick}>Format</LiveEditorAction>
            <LiveEditorAction onClick={onResetClick}>Reset</LiveEditorAction>
          </section>
        </>,
        canvasEditorContainer
      )}
    </>
  );
};

export default withLiveEdit;
