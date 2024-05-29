import React, { useCallback, useRef, useState } from "react";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import ModalContent from "../ModalContent/ModalContent";
import ModalFooter from "../ModalFooter/ModalFooter";
import ModalHeader from "../ModalHeader/ModalHeader";
import Modal, { ModalProps } from "../Modal";
import { useHelperOpenModalButton } from "./Modal.stories.helpers";
import EditableHeading from "../../../components/EditableHeading/EditableHeading";
import ModalFooterButtons from "../ModalFooter/ModalFooterButtons/ModalFooterButtons";
import { Upgrade } from "../../Icon/Icons";
const metaSettings = createStoryMetaSettingsDecorator({
  component: Modal,
  enumPropNamesArray: ["width"], // List enum props here
  actionPropsArray: ["onClose"] // List the component's actions here
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const modalTemplate = ({ onClose, ...modalProps }: ModalProps) => {
  // For some reason storybook replace onClose with mock function as part of the template props so in purpose not pass it forward
  // Control if modal is display or hidden
  const [show, setShow] = useState(false);
  const openModalButtonRef = useRef(null);
  const closeModal = useCallback(() => setShow(false), []);
  // Internal helper method for creating basic button which change the show state to true in order to display the modal
  // This method is not part of our external API and not required for creating functional modal component
  const openModalButton = useHelperOpenModalButton({ title: modalProps.title, setShow, openModalButtonRef });
  return (
    <div>
      {openModalButton}
      <Modal
        id={"story-book-modal"}
        title={"Modal title"}
        description="Subtitle description text goes here"
        contentSpacing
        triggerElement={openModalButtonRef.current}
        // is modal show or hidden
        show={show}
        // set show state to close
        onClose={closeModal}
        {...modalProps}
      >
        <ModalContent>
          <p>Modal content goes here</p>
        </ModalContent>
        <ModalFooterButtons
          primaryButtonText="Confirm"
          secondaryButtonText="Cancel"
          onPrimaryButtonClick={closeModal}
          onSecondaryButtonClick={closeModal}
        />
      </Modal>
    </div>
  );
};

export default {
  title: "Feedback/Modal",
  component: Modal,
  subcomponents: {
    ModalHeader,
    ModalContent,
    ModalFooter
  },
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: modalTemplate.bind({}),
  name: "Overview"
};

export const WidthVariantsNormal = {
  // Boilerplate for creating a modal, not relevant for this example
  render:
    // Internal helper, not part of the API
    // internal helper, not part of the API
    // Modal with default width variant
    // Width prop effects on the modal width
    () => {
      const [show, setShow] = useState(false);
      const openModalButtonRef = useRef(null);
      const closeModal = useCallback(() => {
        setShow(false);
      }, []);

      const openModalButton = useHelperOpenModalButton({
        title: "Default",
        setShow,
        openModalButtonRef
      });

      return (
        <>
          {openModalButton}
          <Modal
            id="story-book-modal"
            title="Modal title"
            triggerElement={openModalButtonRef.current}
            show={show}
            onClose={closeModal}
            width={Modal.width.DEFAULT}
            contentSpacing
          >
            <ModalContent>Modal content goes here</ModalContent>
            <ModalFooterButtons
              primaryButtonText="Confirm"
              secondaryButtonText="Cancel"
              onPrimaryButtonClick={closeModal}
              onSecondaryButtonClick={closeModal}
            />
          </Modal>
        </>
      );
    },

  name: "Width variants - Normal"
};

export const WidthVariantsFull = {
  // Boilerplate for creating a modal, not relevant for this example
  render:
    // Internal helper, not part of the API
    // Modal with full width variant
    // Width prop effects on the modal width
    () => {
      const [show, setShow] = useState(false);
      const openModalButtonRef = useRef(null);

      const closeModal = useCallback(() => {
        setShow(false);
      }, []);

      const openModalButton = useHelperOpenModalButton({
        title: "Full size",
        setShow,
        openModalButtonRef
      });

      return (
        <>
          {openModalButton}
          <Modal
            id="story-book-modal"
            title="Modal title"
            triggerElement={openModalButtonRef.current}
            show={show}
            onClose={closeModal}
            width={Modal.width.FULL_WIDTH}
            contentSpacing
          >
            <ModalContent>Modal content goes here</ModalContent>
            <ModalFooterButtons
              primaryButtonText="Confirm"
              secondaryButtonText="Cancel"
              onPrimaryButtonClick={closeModal}
              onSecondaryButtonClick={closeModal}
            />
          </Modal>
        </>
      );
    },

  name: "Width variants - Full"
};

export const WidthVariantsCustom = {
  // Boilerplate for creating a modal, not relevant for this example
  render:
    // Internal helper, not part of the API
    // Modal with full width variant
    // Width prop effects on the modal width
    () => {
      const [show, setShow] = useState(false);
      const openModalButtonRef = useRef(null);

      const closeModal = useCallback(() => {
        setShow(false);
      }, []);

      const openModalButton = useHelperOpenModalButton({
        title: "Custom size (i.e. 720px)",
        setShow,
        openModalButtonRef
      });

      return (
        <>
          {openModalButton}
          <Modal
            id="story-book-modal"
            title="Modal title"
            triggerElement={openModalButtonRef.current}
            show={show}
            onClose={closeModal}
            width={"720px"}
            contentSpacing
          >
            <ModalContent>Modal content goes here</ModalContent>
            <ModalFooterButtons
              primaryButtonText="Confirm"
              secondaryButtonText="Cancel"
              onPrimaryButtonClick={closeModal}
              onSecondaryButtonClick={closeModal}
            />
          </Modal>
        </>
      );
    },

  name: "Width variants - custom"
};

export const ModalWithIcon = {
  // Boilerplate for creating a modal, not relevant for add icon to the header
  render:
    // Internal helper, not part of the API
    // Modal header with an icon example
    /** Please implement your custom Modal header and set it as child for adding an Icon to your modal **/
    () => {
      const [show, setShow] = useState(false);
      const openModalButtonRef = useRef(null);

      const closeModal = useCallback(() => {
        setShow(false);
      }, []);

      const openModalButton = useHelperOpenModalButton({
        title: "Header with icon",
        setShow,
        openModalButtonRef
      });

      return (
        <div>
          {openModalButton}
          <Modal
            id={"story-book-modal"}
            title="Modal header with an Icon"
            triggerElement={openModalButtonRef.current}
            show={show}
            onClose={closeModal}
            closeButtonAriaLabel={"close"}
            width={Modal.width.DEFAULT}
            contentSpacing
          >
            {}
            <ModalHeader title={"Modal Heading"} icon={Upgrade} iconSize={32} />
            <ModalContent>Modal content goes here</ModalContent>
            <ModalFooterButtons
              primaryButtonText="Confirm"
              secondaryButtonText="Cancel"
              onPrimaryButtonClick={closeModal}
              onSecondaryButtonClick={closeModal}
            />
          </Modal>
        </div>
      );
    },

  name: "Modal with icon"
};

export const AlertModal = {
  // Boilerplate for creating a modal, not relevant for add icon to the header
  render:
    // Internal helper, not part of the API
    // Modal header with an icon example
    // this makes your modal as alert dialog
    () => {
      const [show, setShow] = useState(false);
      const openModalButtonRef = useRef(null);

      const closeModal = useCallback(() => {
        setShow(false);
      }, []);

      const openModalButton = useHelperOpenModalButton({
        title: "Alert dialog",
        setShow,
        openModalButtonRef
      });

      return (
        <div>
          {openModalButton}
          <Modal
            alertDialog
            id="story-book-modal"
            title="Alert modal"
            triggerElement={openModalButtonRef.current}
            show={show}
            onClose={closeModal}
            contentSpacing
          >
            <ModalContent>Modal content goes here</ModalContent>
            <ModalFooterButtons
              primaryButtonText="Confirm"
              secondaryButtonText="Cancel"
              onPrimaryButtonClick={closeModal}
              onSecondaryButtonClick={closeModal}
            />
          </Modal>
        </div>
      );
    },

  name: "Alert Modal"
};

export const ModalWithEditableTitle = {
  // Boilerplate for creating a modal, not relevant for add icon to the header
  render:
    // Internal helper, not part of the API
    // Modal header with an icon example
    /** Please follow the design guidelines when implementing custom title **/
    () => {
      const [show, setShow] = useState(false);
      const openModalButtonRef = useRef(null);

      const closeModal = useCallback(() => {
        setShow(false);
      }, []);

      const openModalButton = useHelperOpenModalButton({
        title: "Open modal",
        setShow,
        openModalButtonRef
      });

      return (
        <div>
          {openModalButton}
          <Modal
            id={"story-book-modal"}
            triggerElement={openModalButtonRef.current}
            show={show}
            onClose={closeModal}
            closeButtonAriaLabel={"close"}
            width={Modal.width.DEFAULT}
            contentSpacing
          >
            <ModalHeader description={"Description text goes here"}>
              <EditableHeading type={EditableHeading.types.H2} value={"Modal title"} />
            </ModalHeader>
            <ModalContent>Modal content goes here</ModalContent>
            <ModalFooterButtons
              primaryButtonText="Confirm"
              secondaryButtonText="Cancel"
              onPrimaryButtonClick={closeModal}
              onSecondaryButtonClick={closeModal}
            />
          </Modal>
        </div>
      );
    },

  name: "Modal with editable title"
};
