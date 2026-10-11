import React, { useCallback, useEffect, useRef, useState } from "react";
import { type BaseItemData } from "@vibe/base-list";
import { useIsomorphicLayoutEffect } from "@vibe/shared";
import { type BaseDropdownProps, type DropdownLazyRootProps } from "../Dropdown.types";
import DropdownStaticController from "./DropdownStaticController";
import { renderDropdownController } from "./renderDropdownController";

type ActivationReason = "initial" | "forced" | "focus" | "click";

type Activation = {
  reason: ActivationReason;
  path?: number[];
};

type DropdownLazyControllerProps<Item extends BaseItemData<Record<string, unknown>>> = {
  dropdownProps: BaseDropdownProps<Item>;
  dropdownRef: React.Ref<HTMLDivElement>;
};

const FOCUSABLE_SELECTOR = "input, select, textarea, button, a[href], [tabindex]";

function getPathFromRoot(root: HTMLElement | null, target: EventTarget | null): number[] | undefined {
  if (!root || !(target instanceof Node) || !root.contains(target)) {
    return undefined;
  }
  const path: number[] = [];
  let node: Node = target;
  while (node !== root && node.parentNode) {
    path.unshift(Array.prototype.indexOf.call(node.parentNode.childNodes, node));
    node = node.parentNode;
  }
  return path;
}

function resolvePath(root: HTMLElement | null, path: number[] | undefined): HTMLElement | null {
  if (!root || !path) {
    return null;
  }
  let node: Node | undefined = root;
  for (const index of path) {
    node = node?.childNodes[index];
    if (!node) {
      return null;
    }
  }
  let element: Element | null = node instanceof Element ? node : node?.parentElement ?? null;
  while (element && !(element instanceof HTMLElement)) {
    element = element.parentElement;
  }
  return element instanceof HTMLElement ? element : null;
}

function getFallbackTarget(root: HTMLElement | null): HTMLElement | null {
  return root?.querySelector<HTMLElement>('[role="combobox"]') ?? null;
}

const DropdownLazyController = <Item extends BaseItemData<Record<string, unknown>>>({
  dropdownProps,
  dropdownRef
}: DropdownLazyControllerProps<Item>) => {
  const { multi, value, defaultValue, onChange, onMenuOpen, onMenuClose, isMenuOpen, autoFocus, disabled } =
    dropdownProps;

  const [activation, setActivation] = useState<Activation | null>(() => (autoFocus ? { reason: "initial" } : null));
  const [uncontrolledValue, setUncontrolledValue] = useState<Item | Item[] | null>(() =>
    multi ? (Array.isArray(defaultValue) ? defaultValue : []) : (defaultValue as Item | undefined) ?? null
  );

  const rootRef = useRef<HTMLDivElement | null>(null);
  const pendingActivationRef = useRef<Activation | null>(activation);
  const lastPointerTypeRef = useRef<string | undefined>(undefined);
  const isHoveredRef = useRef(false);
  const isFocusWithinRef = useRef(false);
  const isMenuOpenRef = useRef(false);
  const idleTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const isForcedOpen = isMenuOpen === true;
  const isActive = activation !== null || isForcedOpen;

  const setRootRef = useCallback((element: HTMLDivElement | null) => {
    rootRef.current = element;
  }, []);

  const activate = useCallback((reason: ActivationReason, path?: number[]) => {
    const nextActivation = { reason, path };
    pendingActivationRef.current = nextActivation;
    isHoveredRef.current = reason === "click" && lastPointerTypeRef.current !== "touch";
    setActivation(nextActivation);
  }, []);

  const deactivateIfIdle = useCallback(() => {
    clearTimeout(idleTimeoutRef.current);
    idleTimeoutRef.current = setTimeout(() => {
      if (!isHoveredRef.current && !isFocusWithinRef.current && !isMenuOpenRef.current) {
        pendingActivationRef.current = null;
        setActivation(null);
      }
    }, 0);
  }, []);

  useEffect(() => () => clearTimeout(idleTimeoutRef.current), []);

  useEffect(() => {
    if (!isForcedOpen && activation?.reason === "forced") {
      deactivateIfIdle();
    }
  }, [isForcedOpen, activation, deactivateIfIdle]);

  useEffect(() => {
    if (isForcedOpen && !activation) {
      setActivation({ reason: "forced" });
    }
  }, [isForcedOpen, activation]);

  useIsomorphicLayoutEffect(() => {
    const pendingActivation = pendingActivationRef.current;
    if (!isActive || !pendingActivation) {
      return;
    }
    pendingActivationRef.current = null;

    if (pendingActivation.reason !== "focus" && pendingActivation.reason !== "click") {
      return;
    }

    const root = rootRef.current;
    const target = resolvePath(root, pendingActivation.path) ?? getFallbackTarget(root);
    if (!target) {
      return;
    }

    const focusTarget = target.closest<HTMLElement>(FOCUSABLE_SELECTOR);
    if (focusTarget && root?.contains(focusTarget)) {
      focusTarget.focus();
    }

    if (pendingActivation.reason === "click") {
      target.click();
    }
  }, [isActive, activation]);

  if (!isActive) {
    const staticRootProps: DropdownLazyRootProps = disabled
      ? { ref: setRootRef }
      : {
          ref: setRootRef,
          onPointerDownCapture: event => {
            lastPointerTypeRef.current = event.pointerType;
          },
          onMouseDownCapture: event => {
            event.preventDefault();
          },
          onClickCapture: event => {
            event.preventDefault();
            event.stopPropagation();
            activate("click", getPathFromRoot(rootRef.current, event.target));
          },
          onFocusCapture: event => {
            activate("focus", getPathFromRoot(rootRef.current, event.target));
          }
        };

    return (
      <DropdownStaticController<Item>
        dropdownProps={dropdownProps}
        selectedValue={value !== undefined ? value : uncontrolledValue}
        dropdownRef={dropdownRef}
        lazyRootProps={staticRootProps}
      />
    );
  }

  const activeRootProps: DropdownLazyRootProps = {
    ref: setRootRef,
    onPointerEnter: () => {
      isHoveredRef.current = true;
    },
    onPointerLeave: () => {
      isHoveredRef.current = false;
      deactivateIfIdle();
    },
    onFocus: () => {
      isFocusWithinRef.current = true;
    },
    onBlur: () => {
      isFocusWithinRef.current = false;
      deactivateIfIdle();
    }
  };

  const activeProps = {
    ...dropdownProps,
    autoFocus: activation?.reason === "initial" ? autoFocus : false,
    defaultValue: value !== undefined ? defaultValue : uncontrolledValue,
    onChange: (nextValue: Item | Item[] | null) => {
      if (value === undefined) {
        setUncontrolledValue(nextValue ?? (multi ? [] : null));
      }
      (onChange as ((option: Item | Item[] | null) => void) | undefined)?.(nextValue);
    },
    onMenuOpen: () => {
      isMenuOpenRef.current = true;
      onMenuOpen?.();
    },
    onMenuClose: () => {
      isMenuOpenRef.current = false;
      onMenuClose?.();
      deactivateIfIdle();
    },
    lazyRootProps: activeRootProps
  } as BaseDropdownProps<Item> & { lazyRootProps: DropdownLazyRootProps };

  return renderDropdownController(activeProps, dropdownRef);
};

export default DropdownLazyController;
