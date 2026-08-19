import cx from "classnames";
import { camelCase } from "es-toolkit";
import React, {
  type FC,
  forwardRef,
  type ReactElement,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from "react";
import useGridKeyboardNavigation from "../../../hooks/useGridKeyboardNavigation/useGridKeyboardNavigation";
import useMergeRef from "../../../hooks/useMergeRef";
import usePrevious from "../../../hooks/usePrevious";
import type VibeComponentProps from "../../../types/VibeComponentProps";
import { NOOP } from "../../../utils/function-utils";
import { type TabProps } from "../Tab/Tab";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import styles from "./TabList.module.scss";

const SELECTED_INDICATOR_INSET_PX = 4;

export interface TabListProps extends VibeComponentProps {
  /**
   * Callback fired when the active tab changes.
   */
  onTabChange?: (tabId: number) => void;
  /**
   * The index of the currently active tab.
   */
  activeTabId?: number;
  /**
   * The type of tab style.
   */
  tabType?: string;
  /**
   * The size of the tab list.
   */
  size?: string;
  /**
   * If true, Sets an E2E underline under the whole tabs component.
   */
  stretchedUnderline?: boolean;
  /**
   * Array of corresponding TabPanel ids for aria-controls relationship.
   */
  tabPanelIds?: string[];
  /**
   * The child elements representing tabs.
   */
  children?: ReactElement<TabProps>[];
}
const TabList: FC<TabListProps> = forwardRef(
  (
    {
      className,
      id,
      onTabChange = NOOP,
      activeTabId = 0,
      tabType = "Compact",
      size,
      stretchedUnderline = false,
      tabPanelIds = [],
      children,
      "data-testid": dataTestId
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);
    const tabRefs = useRef<Record<number, HTMLElement | null>>({});
    const ulRef = useRef<HTMLUListElement>(null);
    const indicatorRef = useRef<HTMLSpanElement>(null);
    const indicatorReadyRef = useRef(false);
    const lastGeometryRef = useRef<{ left: number; width: number } | null>(null);

    const [activeTabState, setActiveTabState] = useState<number>(activeTabId);
    const [indicatorVisible, setIndicatorVisible] = useState(false);

    const prevActiveTabIdProp = usePrevious(activeTabId);
    const prevActiveTabState = usePrevious(activeTabState);

    useEffect(() => {
      // Update active tab if changed from props

      if (activeTabId !== prevActiveTabIdProp && activeTabId !== activeTabState) {
        setActiveTabState(activeTabId);
      }
    }, [activeTabId, prevActiveTabIdProp, activeTabState, setActiveTabState]);

    // Focus management: when activeTabState changes, focus the active tab
    useEffect(() => {
      if (
        prevActiveTabState !== undefined &&
        prevActiveTabState !== activeTabState &&
        tabRefs.current[activeTabState]
      ) {
        tabRefs.current[activeTabState]?.focus();
      }
    }, [activeTabState, prevActiveTabState]);

    const disabledTabIds = useMemo(() => {
      const disabledIds = new Set<number>();
      React.Children.forEach(children, (child, index) => {
        if (child.props.disabled) {
          disabledIds.add(index);
        }
      });
      return disabledIds;
    }, [children]);
    const onTabSelect = useCallback(
      (tabId: number) => {
        if (disabledTabIds.has(tabId)) return;
        setActiveTabState(tabId);
        onTabChange && onTabChange(tabId);
      },
      [onTabChange, disabledTabIds]
    );
    const onTabClick = useCallback(
      (value: HTMLElement | void, tabId: number) => {
        const tabCallbackFunc = children[tabId].props?.onClick;
        if (disabledTabIds.has(tabId)) return;
        if (tabCallbackFunc) tabCallbackFunc(tabId);
        onTabSelect(tabId);
      },
      [children, disabledTabIds, onTabSelect]
    );
    const getItemByIndex = useCallback((index: number): ReactElement<TabProps> => children[index], [children]);
    const disabledIndexes = useMemo(() => Array.from(disabledTabIds), [disabledTabIds]);
    const { activeIndex: focusIndex, onSelectionAction } = useGridKeyboardNavigation({
      ref: ulRef,
      numberOfItemsInLine: children?.length,
      itemsCount: children?.length,
      getItemByIndex,
      onItemClicked: onTabClick,
      disabledIndexes,
      circularNavigation: true
    });

    // Focus management: when focusIndex changes during keyboard navigation, focus the focused tab
    const prevFocusIndex = usePrevious(focusIndex);
    useEffect(() => {
      if (focusIndex !== undefined && focusIndex >= 0 && prevFocusIndex !== focusIndex && tabRefs.current[focusIndex]) {
        tabRefs.current[focusIndex]?.focus();
      }
    }, [focusIndex, prevFocusIndex]);

    const updateSelectedIndicator = useCallback(
      (animate: boolean) => {
        const wrapper = componentRef.current as HTMLElement | null;
        const indicator = indicatorRef.current;
        const tab = tabRefs.current[activeTabState];
        if (!wrapper || !indicator || !tab) return;

        const wrapperRect = wrapper.getBoundingClientRect();
        const tabRect = tab.getBoundingClientRect();
        const toLeft = tabRect.left - wrapperRect.left + wrapper.scrollLeft + SELECTED_INDICATOR_INSET_PX;
        const toWidth = Math.max(0, tabRect.width - SELECTED_INDICATOR_INSET_PX * 2);

        // A non-animated update that lands on the geometry we already applied would only
        // cancel an in-flight glide. ResizeObserver.observe() always fires one such callback,
        // so bail out unless the target actually moved.
        const lastGeometry = lastGeometryRef.current;
        if (!animate && lastGeometry && lastGeometry.left === toLeft && lastGeometry.width === toWidth) {
          setIndicatorVisible(true);
          return;
        }
        lastGeometryRef.current = { left: toLeft, width: toWidth };

        const prefersReducedMotion =
          typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const shouldAnimate = animate && indicatorReadyRef.current && !prefersReducedMotion;

        if (!shouldAnimate) {
          const previousTransition = indicator.style.transition;
          indicator.style.transition = "none";
          indicator.style.left = `${toLeft}px`;
          indicator.style.width = `${toWidth}px`;
          void indicator.offsetWidth;
          indicator.style.transition = previousTransition;
        } else {
          indicator.style.left = `${toLeft}px`;
          indicator.style.width = `${toWidth}px`;
        }

        indicatorReadyRef.current = true;
        setIndicatorVisible(true);
      },
      [activeTabState]
    );

    // Lets the ResizeObserver stay subscribed across tab changes.
    const updateSelectedIndicatorRef = useRef(updateSelectedIndicator);
    updateSelectedIndicatorRef.current = updateSelectedIndicator;

    useLayoutEffect(() => {
      updateSelectedIndicator(true);
    }, [activeTabState, children, size, tabType, updateSelectedIndicator]);

    useEffect(() => {
      const wrapper = componentRef.current as HTMLElement | null;
      if (!wrapper || typeof ResizeObserver === "undefined") return;

      const resizeObserver = new ResizeObserver(() => {
        updateSelectedIndicatorRef.current(false);
      });
      resizeObserver.observe(wrapper);
      Object.values(tabRefs.current).forEach(tab => {
        if (tab) resizeObserver.observe(tab);
      });

      return () => resizeObserver.disconnect();
    }, [children]);

    const tabsToRender = useMemo(() => {
      const childrenToRender = React.Children.map(children, (child, index) => {
        const isActive = activeTabState === index;

        const shouldBeFocusable = focusIndex !== undefined && focusIndex >= 0 ? focusIndex === index : isActive;

        return React.cloneElement(child, {
          value: index,
          active: isActive,
          focus: focusIndex === index,
          onClick: onSelectionAction,
          stretchedUnderline,
          className: cx(styles.tabListTabWrapper, child.props.className),
          tabInnerClassName: cx(styles.tabListTabInner, child.props.tabInnerClassName),
          tabIndex: shouldBeFocusable ? 0 : -1,
          ariaControls: tabPanelIds[index],
          ref: (element: HTMLElement | null) => {
            tabRefs.current[index] = element;
          }
        } as Partial<TabProps> & { ref: React.Ref<HTMLElement>; tabInnerLabelId?: string; ariaControls?: string });
      });
      return childrenToRender;
    }, [children, activeTabState, focusIndex, onSelectionAction, stretchedUnderline, tabPanelIds, id]);

    return (
      <div
        ref={mergedRef}
        className={cx(styles.tabsWrapper, className, [getStyle(styles, camelCase(tabType))], {
          [styles.stretchedUnderline]: stretchedUnderline
        })}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TAB_LIST, id)}
      >
        <ul ref={ulRef} className={cx(styles.tabsList, [getStyle(styles, size)])} role="tablist">
          {tabsToRender}
        </ul>
        <span
          ref={indicatorRef}
          className={cx(styles.selectedIndicator, { [styles.visible]: indicatorVisible })}
          aria-hidden
        />
      </div>
    );
  }
);
Object.assign(TabList, {
  isTabList: true
});

export default TabList;
