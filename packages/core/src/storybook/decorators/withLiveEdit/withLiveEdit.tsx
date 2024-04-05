import { Decorator, Parameters as StorybookParameters } from "@storybook/react";
import { useEffect, useRef, useState } from "react";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { langs } from "@uiw/codemirror-extensions-langs";
import * as VibeComponents from "../../../components";
import * as VibeComponentsNext from "../../../next";
import * as VibeIcons from "../../../components/Icon/Icons";
import { createPortal } from "react-dom";
import { LiveProvider } from "react-live";
import LivePreview from "../../components/live-preview/LivePreview";
import styles from "./withLiveEdit.module.scss";
import LiveEditor from "../../components/live-editor/LiveEditor";
import { formatCode } from "./prettier-utils";

const globalScope = { ...VibeComponents, VibeIcons, VibeNext: VibeComponentsNext };

type Parameters = StorybookParameters & {
  liveEdit?: {
    scope?: Record<string, unknown>;
    isEnabled?: boolean;
  };
};

const withLiveEdit: Decorator = (Story, { id, parameters, viewMode }: Parameters) => {
  const scope = { ...globalScope, ...parameters.docs?.liveEdit?.scope };
  const originalCode = useRef<string>(extractCodeFromSource(parameters.docs.source?.originalSource) || "");
  const [code, setCode] = useState<string>(originalCode.current);
  const [dirty, setDirty] = useState<boolean>(false);

  const handleChange = (newVal: string) => {
    setCode(newVal);
    setDirty(true);
  };

  useEffect(() => {
    setCode(code => {
      try {
        return formatCode(code);
      } catch (e) {
        console.error(e);
        return originalCode.current;
      }
    });
  }, []);

  const shouldAllowLiveEdit = viewMode === "docs" && parameters.docs?.liveEdit?.isEnabled;

  return (
    <>
      {dirty ? (
        <>
          <div className={styles.modifiedVersionIndicator}>Modified Version</div>
          <LiveProvider code={code} scope={scope} enableTypeScript>
            <LivePreview />
          </LiveProvider>
        </>
      ) : (
        <Story />
      )}
      {shouldAllowLiveEdit &&
        document.getElementById(id) &&
        createPortal(
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
          document.getElementById(id)
        )}
    </>
  );
};

function extractCodeFromSource(csfSource: string): string {
  // capture "render:" from the string
  if (!csfSource) {
    return "";
  }
  const match = csfSource.match(/render:\s*(?:\(\)\s*=>\s*)?([\s\S]*?)(?=\s*,\s*[\w]+:\s*|}$)/);

  if (!match?.[1]) {
    return "";
  }

  return match[1].trim();
}

export default withLiveEdit;
