import {
  useCallback,
  useRef,
  useEffect,
  type MouseEvent as ReactMouseEvent,
} from "react";
import type { ColumnWidths } from "@/components/types";
import { MIN_COLUMN_WIDTH_PX } from "@/board/gridTemplate";

type OnResize = (columnId: keyof ColumnWidths, nextWidth: number) => void;

/**
 * Pointer-driven column resize using document-level listeners (board grid pattern).
 * Widths are read at mousedown so parent re-renders during drag do not desync start width.
 */
export function useDocumentColumnResize(
  columnWidths: ColumnWidths,
  onColumnResize: OnResize,
) {
  const widthsRef = useRef(columnWidths);
  const onResizeRef = useRef(onColumnResize);

  useEffect(() => {
    widthsRef.current = columnWidths;
  }, [columnWidths]);

  useEffect(() => {
    onResizeRef.current = onColumnResize;
  }, [onColumnResize]);

  const startResize = useCallback((columnId: keyof ColumnWidths) => {
    return (e: ReactMouseEvent) => {
      e.preventDefault();
      const startX = e.clientX;
      const startWidth = widthsRef.current[columnId];

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const delta = moveEvent.clientX - startX;
        onResizeRef.current(
          columnId,
          Math.max(MIN_COLUMN_WIDTH_PX, startWidth + delta),
        );
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return startResize;
}
