import React, { forwardRef, useEffect, useState } from "react";
import { Button, IconButton } from "@vibe/core";
import { Fullscreen } from "@vibe/icons";
import { StorybookLink, Tip } from "vibe-storybook-components";
import cx from "classnames";
import styles from "./Modal.stories.module.scss";
import { getStyle } from "@vibe/shared";

export const OpenedModalPreview = forwardRef(
  (
    {
      onOpenModalClick,
      isDocsView,
      isFullView,
      size = "small",
      showFullPreviewButton,
      onFullPreviewClick,
      children: modal
    }: {
      onOpenModalClick: () => void;
      isDocsView?: boolean;
      isFullView?: boolean;
      size?: "small" | "medium" | "large";
      showFullPreviewButton?: boolean;
      onFullPreviewClick: () => void;
      children: React.ReactNode;
    },
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        className={cx(styles.preview, { [getStyle(styles, size)]: isDocsView })}
        ref={ref}
        // workaround to prevent modal from autofocusing on page load (unless on full view)
        {...(isDocsView && !isFullView && { "data-no-autofocus": true })}
      >
        <Button onClick={onOpenModalClick}>Open Modal</Button>
        {modal}
        {showFullPreviewButton && (
          <IconButton
            wrapperClassName={styles.fullPreviewButtonWrapper}
            className={styles.fullPreviewButton}
            kind="secondary"
            icon={Fullscreen}
            color="primary"
            onClick={onFullPreviewClick}
            ariaLabel="Open modal in full preview mode"
          />
        )}
      </div>
    );
  }
);

export const useRemoveModalScrollLock = (show: boolean, isDocsView?: boolean, isFullView?: boolean) => {
  useEffect(() => {
    if (show && document.body.attributes.getNamedItem("data-scroll-locked") && isDocsView && !isFullView) {
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
  }, [show, isDocsView, isFullView]);
};

export function withOpenedModalPreview(
  Story: React.FunctionComponent<{
    show: boolean;
    setShow: (show: boolean) => void;
    container?: Element | DocumentFragment;
  }>,
  {
    size,
    isDocsView,
    allowFullViewInDocs
  }: { size?: "small" | "medium" | "large"; isDocsView: boolean; allowFullViewInDocs?: boolean }
) {
  const [show, setShow] = useState(true);
  const [isFullView, setFullView] = useState(false);
  useRemoveModalScrollLock(show, isDocsView, isFullView); // internal hook, for documentation purposes, to enable page scroll on docs view

  const [modalContainer, setModalContainer] = useState<Element | DocumentFragment>(null);

  return (
    // internal component, for documentation purposes, to open modal inside a container
    <OpenedModalPreview
      size={size}
      onOpenModalClick={() => {
        setShow(true);
        setFullView(false);
      }}
      isDocsView={isDocsView}
      isFullView={isFullView}
      showFullPreviewButton={allowFullViewInDocs && isDocsView && !isFullView && show}
      onFullPreviewClick={() => {
        setShow(false);
        setFullView(true);
        setTimeout(() => setShow(true), 250);
      }}
      ref={element => {
        if (!element || !isDocsView || isFullView) return;
        setModalContainer(element);
      }}
    >
      <Story show={show} setShow={setShow} container={isFullView ? document.body : modalContainer} />
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
