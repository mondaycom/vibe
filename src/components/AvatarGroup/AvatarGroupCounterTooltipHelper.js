import { useKeyEvent } from "hooks";

export function useTooltipContentTabNavigation({
  counterContainerRef = undefined,
  tooltipContentContainerRef,
  focusPrevPlaceholderRef,
  focusNextPlaceholderRef
}) {
  // For Counter
  useKeyEvent({
    keys: ["Tab"],
    withoutModifier: true,
    ref: counterContainerRef,
    callback: e => {
      // console.log("TAB avatarGroup");
      if (e.target === counterContainerRef.current) {
        e.preventDefault();
        // console.log("TAB avatarGroup (1) counterContainerRef, focusing (2) tooltipContentContainerRef");
        tooltipContentContainerRef.current && tooltipContentContainerRef.current.focus();
      }
    }
  });

  // For Counter
  useKeyEvent({
    keys: ["Tab"],
    modifier: useKeyEvent.modifiers.SHIFT,
    ref: counterContainerRef,
    callback: e => {
      // console.log("SHIFT+TAB avatarGroup");
      if (e.target === counterContainerRef.current) {
        // console.log("SHIFT+TAB avatarGroup (1) counterContainerRef, focusing (0) focusPrevPlaceholderRef");
        focusPrevPlaceholderRef?.current && focusPrevPlaceholderRef.current.focus();
      }
    }
  });

  // For Tooltip content
  useKeyEvent({
    keys: ["Tab"],
    withoutModifier: true,
    callback: e => {
      // console.log("TAB tooltipContentContainerRef", tooltipContentContainerRef);
      if (e.target === tooltipContentContainerRef.current) {
        // console.log("TAB tooltipContent (2) tooltipContentContainerRef, focusing (3) focusNextPlaceholderRef");
        focusNextPlaceholderRef?.current && focusNextPlaceholderRef.current.focus();
      }
    }
  });

  // For Tooltip content
  useKeyEvent({
    keys: ["Tab"],
    modifier: useKeyEvent.modifiers.SHIFT,
    callback: e => {
      // console.log("SHIFT+TAB tooltipContentContainerRef", tooltipContentContainerRef);
      if (e.target === tooltipContentContainerRef.current) {
        e.preventDefault();
        // console.log("SHIFT+TAB tooltipContent (2) tooltipContentContainerRef, focusing (1) counterContainerRef");
        counterContainerRef.current && counterContainerRef.current.focus();
      }
    }
  });
}
