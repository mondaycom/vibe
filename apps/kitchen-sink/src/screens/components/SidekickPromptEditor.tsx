import { useState } from "react";
import {
  AISkills,
  AttachSlanted,
  Add,
  MoveArrowUp,
} from "@mondaydotcomorg/icons";
import styles from "./SidekickPromptEditor.module.scss";
import { StrokeSpotlight } from "@vibe/core";
import { STROKE_NO_PULSE_ATTR } from "@vibe/core";

interface SidekickPromptEditorProps {
  onSend?: (message: string) => void;
}

export function SidekickPromptEditor({ onSend }: SidekickPromptEditorProps) {
  const [inputValue, setInputValue] = useState("");
  const hasInput = inputValue.trim().length > 0;

  const handleSend = () => {
    if (!hasInput) return;
    onSend?.(inputValue.trim());
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={styles.composerShell}>
      <StrokeSpotlight
        palette="sidekick"
        spread={40}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={1.5}
        glowBlur={12}
        radius={8}
      >
        <div className={`${styles.editor} ${styles.composerWrap}`}>
          <div className={styles.inner}>
            <div className={styles.inputRow}>
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask Sidekick anything..."
                rows={1}
                className={styles.textarea}
                onKeyDown={handleKeyDown}
              />
            </div>

            <div className={styles.actionRow}>
              <div className={styles.leftActions}>
                <button
                  type="button"
                  className={styles.iconButton}
                  aria-label="AI skills"
                  {...{ [STROKE_NO_PULSE_ATTR]: true }}
                >
                  <AISkills size="16" />
                </button>
                <button
                  type="button"
                  className={styles.iconButton}
                  aria-label="Attach"
                  {...{ [STROKE_NO_PULSE_ATTR]: true }}
                >
                  <AttachSlanted size="16" />
                </button>
                <button
                  type="button"
                  className={styles.addContext}
                  {...{ [STROKE_NO_PULSE_ATTR]: true }}
                >
                  <Add size="16" />
                  <span className={styles.addContextLabel}>Add context</span>
                </button>
              </div>

              <div className={styles.spacer} />

              <button
                type="button"
                disabled={!hasInput}
                className={styles.sendButton}
                onClick={handleSend}
                aria-label="Send"
              >
                <MoveArrowUp size="16" />
              </button>
            </div>
          </div>
        </div>
      </StrokeSpotlight>
    </div>
  );
}
