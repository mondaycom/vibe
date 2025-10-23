import { useCallback, useRef, useState } from "react";
import { formatCode } from "../utils/prettier-utils";
import { extractRenderAttributeFromCsf } from "../utils/parse-csf-utils";

function format(source: string): string {
  try {
    return formatCode(source);
  } catch (e) {
    return source;
  }
}

const useLiveEditorActions = (originalSource: string) => {
  const originalRenderFromCsf = useRef<string>(
    originalSource ? extractRenderAttributeFromCsf(`(${originalSource})`) : ""
  );
  const [code, setCode] = useState<string>(format(originalRenderFromCsf.current));
  const [isDirty, setDirty] = useState<boolean>(false);
  const [isCopied, setCopied] = useState<boolean>(false);

  const onChange = useCallback((newVal: string) => {
    setCode(newVal);
    setDirty(true);
  }, []);

  const onCopyClick = useCallback(() => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  const onFormatClick = useCallback(() => {
    setCode(format(code));
  }, [code]);

  const onResetClick = useCallback(() => {
    setCode(format(originalRenderFromCsf.current));
    setDirty(false);
  }, []);

  return {
    code,
    isDirty,
    onChange,
    onCopyClick,
    isCopied,
    onFormatClick,
    onResetClick
  };
};

export default useLiveEditorActions;
