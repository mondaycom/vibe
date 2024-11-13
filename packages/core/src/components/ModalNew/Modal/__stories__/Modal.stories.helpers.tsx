import React, { useEffect, useState } from "react";
import Button from "../../../Button/Button";
import { StorybookLink, Tip } from "vibe-storybook-components";
import { useAfterFirstRender } from "../../../../hooks";
import cx from "classnames";
import styles from "./Modal.stories.module.scss";
import { createPortal } from "react-dom";

export const OpenedModalPreview = ({
  onOpenModalClick,
  isDocsView,
  large,
  children: modal
}: {
  onOpenModalClick: () => void;
  isDocsView?: boolean;
  large?: boolean;
  children: React.ReactNode;
}) => {
  const isAfterFirstRender = useAfterFirstRender();
  return (
    <div
      className={cx(styles.preview, { [styles.large]: large })}
      // workaround to prevent modal from autofocusing on page load
      // autofocus would work as expected when modal closes and reopens
      {...(!isAfterFirstRender.current && isDocsView && { "data-no-autofocus": true })}
    >
      <Button onClick={onOpenModalClick}>Open Modal</Button>
      {isDocsView ? modal : createPortal(modal, document.body)}
    </div>
  );
};

export const useRemoveModalScrollLock = (show: boolean, isDocsView?: boolean) => {
  useEffect(() => {
    if (show && document.body.attributes.getNamedItem("data-scroll-locked") && isDocsView) {
      document.body.attributes.removeNamedItem("data-scroll-locked");
      document.documentElement.addEventListener(
        "wheel",
        e => {
          e.stopImmediatePropagation();
        },
        true
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- this is intended to run once, on mount
  }, []);
};

export function OpenedModalPreviewDecorator(
  Story: React.FunctionComponent<{ show: boolean; setShow: (show: boolean) => void }>,
  { large, isDocsView }: { large?: boolean; isDocsView: boolean }
) {
  const [show, setShow] = useState(true);
  useRemoveModalScrollLock(show, isDocsView); // internal hook, for documentation purposes, to enable scroll on first load

  return (
    // internal component, for documentation purposes, to open modal inside a container
    <OpenedModalPreview large={large} onOpenModalClick={() => setShow(true)} isDocsView={isDocsView}>
      <Story show={show} setShow={setShow} />
    </OpenedModalPreview>
  );
}

export const ModalTip = () => (
  <Tip>
    Since the modal is used for short and non-frequent tasks, consider using the main flow for common tasks. For
    creating a popover positioned next to other components, like customized menus, check out our{" "}
    <StorybookLink page="Popover/Dialog" size={StorybookLink.sizes.SMALL}>
      Dialog
    </StorybookLink>{" "}
    component.
  </Tip>
);
