# Storybook Code Examples

## Overview

```tsx
modalTemplate = ({
  onClose,
  ...modalProps
}: ModalProps) => {
  // For some reason storybook replace onClose with mock function as part of the template props so in purpose not pass it forward
  // Control if modal is display or hidden
  const [show, setShow] = useState(false);
  const openModalButtonRef = useRef(null);
  const closeModal = useCallback(() => setShow(false), []);
  // Internal helper method for creating basic button which change the show state to true in order to display the modal
  // This method is not part of our external API and not required for creating functional modal component
  const openModalButton = useHelperOpenModalButton({
    title: modalProps.title,
    setShow,
    openModalButtonRef
  });
  return <div>
      {openModalButton}
      <Modal id={"story-book-modal"} title={"Modal title"} description="Subtitle description text goes here" contentSpacing triggerElement={openModalButtonRef.current}
    // is modal show or hidden
    show={show}
    // set show state to close
    onClose={closeModal} {...modalProps}>
        <ModalContent>
          <p>Modal content goes here</p>
        </ModalContent>
        <ModalFooterButtons primaryButtonText="Confirm" secondaryButtonText="Cancel" onPrimaryButtonClick={closeModal} onSecondaryButtonClick={closeModal} />
      </Modal>
    </div>;
}
```

## Sizes

```tsx
const [showNormal, setShowNormal] = useState(false);
const [showFull, setShowFull] = useState(false);
const [showCustom, setShowCustom] = useState(false);
const openModalButtonRefNormal = useRef(null);
const openModalButtonRefFull = useRef(null);
const openModalButtonRefCustom = useRef(null);
const closeModalNormal = useCallback(() => setShowNormal(false), []);
const closeModalFull = useCallback(() => setShowFull(false), []);
const closeModalCustom = useCallback(() => setShowCustom(false), []);
const openModalButtonNormal = useHelperOpenModalButton({
  title: "Default",
  setShow: setShowNormal,
  openModalButtonRef: openModalButtonRefNormal
});
const openModalButtonFull = useHelperOpenModalButton({
  title: "Full size",
  setShow: setShowFull,
  openModalButtonRef: openModalButtonRefFull
});
const openModalButtonCustom = useHelperOpenModalButton({
  title: "Custom size (720px)",
  setShow: setShowCustom,
  openModalButtonRef: openModalButtonRefCustom
});
return <>
        {/* Default Width Modal */}
        {openModalButtonNormal}
        <Modal id="storybook-modal-normal" title="Modal title" triggerElement={openModalButtonRefNormal.current} show={showNormal} onClose={closeModalNormal} contentSpacing>
          <ModalContent>Modal content goes here</ModalContent>
          <ModalFooterButtons primaryButtonText="Confirm" secondaryButtonText="Cancel" onPrimaryButtonClick={closeModalNormal} onSecondaryButtonClick={closeModalNormal} />
        </Modal>

        {/* Full Width Modal */}
        {openModalButtonFull}
        <Modal id="storybook-modal-full" title="Modal title" triggerElement={openModalButtonRefFull.current} show={showFull} onClose={closeModalFull} width="full-width" contentSpacing>
          <ModalContent>Modal content goes here</ModalContent>
          <ModalFooterButtons primaryButtonText="Confirm" secondaryButtonText="Cancel" onPrimaryButtonClick={closeModalFull} onSecondaryButtonClick={closeModalFull} />
        </Modal>

        {/* Custom Width Modal */}
        {openModalButtonCustom}
        <Modal id="storybook-modal-custom" title="Modal title" triggerElement={openModalButtonRefCustom.current} show={showCustom} onClose={closeModalCustom} width="720px" contentSpacing>
          <ModalContent>Modal content goes here</ModalContent>
          <ModalFooterButtons primaryButtonText="Confirm" secondaryButtonText="Cancel" onPrimaryButtonClick={closeModalCustom} onSecondaryButtonClick={closeModalCustom} />
        </Modal>
      </>;
```

## Modal with icon

```tsx
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
return <div>
          {openModalButton}
          <Modal id={"story-book-modal"} title="Modal header with an Icon" triggerElement={openModalButtonRef.current} show={show} onClose={closeModal} closeButtonAriaLabel={"close"} contentSpacing>
            {}
            <ModalHeader title={"Modal Heading"} icon={Upgrade} iconSize={32} />
            <ModalContent>Modal content goes here</ModalContent>
            <ModalFooterButtons primaryButtonText="Confirm" secondaryButtonText="Cancel" onPrimaryButtonClick={closeModal} onSecondaryButtonClick={closeModal} />
          </Modal>
        </div>;
```

## Alert Modal

```tsx
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
return <div>
          {openModalButton}
          <Modal alertDialog id="story-book-modal" title="Alert modal" triggerElement={openModalButtonRef.current} show={show} onClose={closeModal} contentSpacing>
            <ModalContent>Modal content goes here</ModalContent>
            <ModalFooterButtons primaryButtonText="Confirm" secondaryButtonText="Cancel" onPrimaryButtonClick={closeModal} onSecondaryButtonClick={closeModal} />
          </Modal>
        </div>;
```

## Modal with editable title

```tsx
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
return <div>
          {openModalButton}
          <Modal id={"story-book-modal"} triggerElement={openModalButtonRef.current} show={show} onClose={closeModal} closeButtonAriaLabel={"close"} contentSpacing>
            <ModalHeader description={"Description text goes here"}>
              <EditableHeading type={EditableHeading.types.H2} value={"Modal title"} />
            </ModalHeader>
            <ModalContent>Modal content goes here</ModalContent>
            <ModalFooterButtons primaryButtonText="Confirm" secondaryButtonText="Cancel" onPrimaryButtonClick={closeModal} onSecondaryButtonClick={closeModal} />
          </Modal>
        </div>;
```

