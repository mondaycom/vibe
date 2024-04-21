import { Decorator, StoryContext } from "@storybook/react";
import { useMemo, useRef, useState } from "react";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { langs } from "@uiw/codemirror-extensions-langs";
import * as VibeComponents from "../../../components";
import * as VibeComponentsNext from "../../../next";
import * as VibeIcons from "../../../components/Icon/Icons";
import { createPortal } from "react-dom";
import LiveEditor from "../../components/live-editor/LiveEditor";
import { formatCode } from "./utils/prettier-utils";
import LiveContent from "./LiveContent/LiveContent";
import { extractRenderAttributeFromCsf } from "./utils/parse-csf-utils";

function getInitialCodeValue(source: string, shouldPrintError: boolean): string {
  try {
    // need to wrap with parentheses to avoid syntax errors
    const code = extractRenderAttributeFromCsf(`(${source})`);
    return formatCode(code);
  } catch (e) {
    if (shouldPrintError) {
      console.error(e);
    }
    return source;
  }
}

const withLiveEdit: Decorator = (Story, context: StoryContext) => {
  const { id, parameters, viewMode, moduleExport } = context;
  const canvasEditorContainer = useMemo(() => document.getElementById(id), [id]);
  const shouldAllowLiveEdit = viewMode === "docs" && parameters.docs?.liveEdit?.isEnabled && !!canvasEditorContainer;

  const originalCode = useRef<string>(
    getInitialCodeValue(parameters.docs.source?.originalSource || "", shouldAllowLiveEdit)
  );
  const [code, setCode] = useState<string>(originalCode.current);
  const [dirty, setDirty] = useState<boolean>(false);

  const handleChange = (newVal: string) => {
    setCode(newVal);
    setDirty(true);
  };

  if (!shouldAllowLiveEdit) {
    return <Story />;
  }

  return (
    <>
      {dirty ? (
        <LiveContent
          code={code}
          scope={parameters.docs?.liveEdit?.scope}
          decorators={moduleExport.decorators || []}
          context={context}
        />
      ) : (
        <Story />
      )}
      {createPortal(
        <LiveEditor
          placeholder={"Insert code here"}
          code={code}
          theme={vscodeDark}
          extensions={[langs.tsx()]}
          style={{ fontSize: 13 }}
          onChange={handleChange}
          setup={{
            lineNumbers: false,
            foldGutter: false,
            highlightActiveLine: false,
            autocompletion: false
          }}
        />,
        canvasEditorContainer
      )}
    </>
  );
};

export default withLiveEdit;
