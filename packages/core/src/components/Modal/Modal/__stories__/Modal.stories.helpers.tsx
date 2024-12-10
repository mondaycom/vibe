import React, { forwardRef, useEffect, useRef, useState } from "react";
import Button from "../../../Button/Button";
import { StorybookLink, Tip } from "vibe-storybook-components";
import { useAfterFirstRender } from "../../../../hooks";
import cx from "classnames";
import styles from "./Modal.stories.module.scss";
import { createPortal } from "react-dom";
import { getStyle } from "../../../../helpers/typesciptCssModulesHelper";

export const OpenedModalPreview = forwardRef(
  (
    {
      onOpenModalClick,
      isDocsView,
      size = "small",
      children: modal
    }: {
      onOpenModalClick: () => void;
      isDocsView?: boolean;
      size?: "small" | "medium" | "large";
      children: React.ReactNode;
    },
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const isAfterFirstRender = useAfterFirstRender();
    return (
      <div
        className={cx(styles.preview, { [getStyle(styles, size)]: isDocsView })}
        ref={ref}
        // workaround to prevent modal from autofocusing on page load
        // autofocus would work as expected when modal closes and reopens
        {...(!isAfterFirstRender.current && isDocsView && { "data-no-autofocus": true })}
      >
        <Button onClick={onOpenModalClick}>Open Modal</Button>
        {modal}
      </div>
    );
  }
);

export const useRemoveModalScrollLock = (show: boolean, isDocsView?: boolean) => {
  useEffect(() => {
    if (show && document.body.attributes.getNamedItem("data-scroll-locked") && isDocsView) {
      requestAnimationFrame(() => {
        document.body.attributes.removeNamedItem("data-scroll-locked");
        document.documentElement.addEventListener(
          "wheel",
          e => {
            e.stopImmediatePropagation();
          },
          true
        );
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- this is intended to run once, on mount
  }, []);
};

export function withOpenedModalPreview(
  Story: React.FunctionComponent<{
    show: boolean;
    setShow: (show: boolean) => void;
    container?: React.RefObject<HTMLElement>;
  }>,
  { size, isDocsView }: { size?: "small" | "medium" | "large"; isDocsView: boolean }
) {
  const [show, setShow] = useState(true);
  const container = useRef<HTMLElement>(null);
  useRemoveModalScrollLock(show, isDocsView); // internal hook, for documentation purposes, to enable scroll on first load

  return (
    // internal component, for documentation purposes, to open modal inside a container
    <OpenedModalPreview
      size={size}
      onOpenModalClick={() => setShow(true)}
      isDocsView={isDocsView}
      ref={element => {
        isDocsView ? (container.current = element) : (container.current = document.body);
      }}
    >
      <Story show={show} setShow={setShow} container={container} />
    </OpenedModalPreview>
  );
}

export const ModalTip = () => (
  <div style={{ marginTop: 40 }}>
    <Tip>
      Since the modal is used for short and non-frequent tasks, consider using the main flow for common tasks. For
      creating a popover positioned next to other components, like customized menus, check out our{" "}
      <StorybookLink page="Popover/Dialog" size={StorybookLink.sizes.SMALL}>
        Dialog
      </StorybookLink>{" "}
      component.
    </Tip>
  </div>
);
